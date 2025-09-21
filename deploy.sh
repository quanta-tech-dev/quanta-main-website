#!/bin/bash

# Quanta Project Deployment Script for Hetzner
# This script deploys the application using Docker Compose

set -e  # Exit on any error

echo "🚀 Starting Quanta Project Deployment..."

# Configuration
PROJECT_NAME="quanta-main-website"
DOCKER_COMPOSE_FILE="docker-compose.yml"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
check_docker() {
    log_info "Checking Docker installation..."
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed. Please install Docker first."
        exit 1
    fi

    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi

    log_success "Docker and Docker Compose are installed."
}

# Create necessary directories
setup_directories() {
    log_info "Setting up directories..."

    # Create uploads directory
    mkdir -p uploads
    chmod 755 uploads

    # Create SSL directory for future SSL certificates
    mkdir -p ssl

    log_success "Directories created successfully."
}

# Setup environment variables
setup_environment() {
    log_info "Setting up environment variables..."

    if [ ! -f .env.production ]; then
        log_warning ".env.production file not found. Creating from template..."
        cp .env.production.example .env.production 2>/dev/null || log_warning "No .env.production.example found"
    fi

    # Prompt for domain if not set
    if [ -z "$DOMAIN" ]; then
        read -p "Enter your domain name (e.g., yourdomain.com): " DOMAIN
        export DOMAIN
    fi

    # Generate secure secrets if not set
    if [ -z "$ADMIN_JWT_SECRET" ]; then
        ADMIN_JWT_SECRET=$(openssl rand -base64 32)
        export ADMIN_JWT_SECRET
        log_info "Generated new ADMIN_JWT_SECRET"
    fi

    if [ -z "$POSTGRES_PASSWORD" ]; then
        POSTGRES_PASSWORD=$(openssl rand -base64 24)
        export POSTGRES_PASSWORD
        log_info "Generated new POSTGRES_PASSWORD"
    fi

    # Update .env.production with new values
    sed -i.bak "s|SITE_URL=.*|SITE_URL=https://${DOMAIN}|g" .env.production
    sed -i.bak "s|ADMIN_JWT_SECRET=.*|ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}|g" .env.production
    sed -i.bak "s|POSTGRES_PASSWORD=.*|POSTGRES_PASSWORD=${POSTGRES_PASSWORD}|g" .env.production

    log_success "Environment variables configured."
}

# Build and deploy
deploy() {
    log_info "Building and deploying the application..."

    # Stop existing containers
    log_info "Stopping existing containers..."
    docker-compose -f $DOCKER_COMPOSE_FILE down || log_warning "No existing containers to stop"

    # Remove old images (optional)
    log_info "Cleaning up old images..."
    docker image prune -f

    # Build and start services
    log_info "Building and starting services..."
    docker-compose -f $DOCKER_COMPOSE_FILE up --build -d

    # Wait for services to be ready
    log_info "Waiting for services to be ready..."
    sleep 30

    # Run database migrations
    log_info "Running database migrations..."
    docker-compose -f $DOCKER_COMPOSE_FILE exec -T app npx prisma db push

    # Check service health
    check_services
}

# Check if services are running
check_services() {
    log_info "Checking service health..."

    # Check if containers are running
    if docker-compose -f $DOCKER_COMPOSE_FILE ps | grep -q "Up"; then
        log_success "Containers are running!"
    else
        log_error "Some containers are not running. Check logs with: docker-compose logs"
        exit 1
    fi

    # Check if application is responding
    log_info "Checking application health..."
    sleep 10

    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        log_success "Application is responding on port 3000!"
    else
        log_warning "Application might not be ready yet. Check logs: docker-compose logs app"
    fi
}

# Setup Nginx (optional)
setup_nginx() {
    log_info "Setting up Nginx configuration..."

    cat > nginx.conf << EOF
events {
    worker_connections 1024;
}

http {
    upstream app {
        server app:3000;
    }

    server {
        listen 80;
        server_name ${DOMAIN:-localhost};

        location / {
            proxy_pass http://app;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
            proxy_cache_bypass \$http_upgrade;
        }

        # Serve uploaded files
        location /uploads {
            alias /var/www/uploads;
            expires 30d;
            add_header Cache-Control "public, immutable";
        }
    }
}
EOF

    log_success "Nginx configuration created."
}

# Main deployment process
main() {
    log_info "Starting deployment process..."

    check_docker
    setup_directories
    setup_environment
    setup_nginx
    deploy

    log_success "🎉 Deployment completed successfully!"
    log_info "Your application should be available at:"
    log_info "  - Local: http://localhost:3000"
    log_info "  - Domain: https://${DOMAIN:-yourdomain.com} (after DNS setup)"
    log_info ""
    log_info "Useful commands:"
    log_info "  - View logs: docker-compose logs -f"
    log_info "  - Stop services: docker-compose down"
    log_info "  - Restart services: docker-compose restart"
    log_info "  - Update application: git pull && ./deploy.sh"
}

# Run main function
main "$@"