# Quanta Main Website - Deployment Guide

## 🚀 Hetzner Deployment with Docker

Bu guide Quanta layihəsini Hetzner serverdə Docker ilə deploy etmək üçündür.

### 📋 Prerequisites

- Hetzner server (Ubuntu 20.04+)
- Docker və Docker Compose quraşdırılmış
- Domain name (məsələn: quanta.com)
- Git quraşdırılmış

### 🛠 Server Setup

1. **Server-ə bağlanın:**
```bash
ssh root@your-server-ip
```

2. **Docker quraşdırın:**
```bash
# Docker quraşdırma
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Docker Compose quraşdırma
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

3. **Git quraşdırın:**
```bash
apt update && apt install -y git curl
```

### 📦 Deployment Steps

1. **Layihəni clone edin:**
```bash
git clone https://github.com/your-username/quanta-main-website.git
cd quanta-main-website
```

2. **Environment variables quraşdırın:**
```bash
cp .env.production .env
nano .env  # Domain və digər ayarları dəyişin
```

3. **Deploy script işlədin:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### 🔧 Manual Deployment

Əgər script işləmirsə, manual olaraq:

```bash
# Build və start
docker-compose up --build -d

# Database migrate
docker-compose exec app npx prisma db push

# Default admin yaradın
docker-compose exec app node -e "
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function createAdmin() {
  const hash = await bcrypt.hash('admin123', 10);
  await prisma.adminSettings.create({
    data: {
      name: 'Quanta Admin',
      email: 'admin@quanta.com',
      password: hash,
      title: 'System Administrator'
    }
  });
  console.log('Admin created!');
  await prisma.\$disconnect();
}

createAdmin().catch(console.error);
"
```

### 🌐 Domain Setup

1. **DNS Records əlavə edin:**
   - A record: `@` → `your-server-ip`
   - A record: `www` → `your-server-ip`

2. **SSL Certificate quraşdırın:**
```bash
# Certbot quraşdırın
apt install certbot python3-certbot-nginx

# SSL certificate alın
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 🔍 Service Management

```bash
# Bütün servislərə bax
docker-compose ps

# Logları yoxla
docker-compose logs -f

# Servisi restart et
docker-compose restart app

# Servisi stop et
docker-compose down

# Servisi update et
git pull
./deploy.sh
```

### 📊 Health Check

Servis yoxlaması üçün:
```bash
curl http://localhost:3000/api/health
```

### 🔐 Security Settings

1. **Firewall quraşdırın:**
```bash
ufw allow 22
ufw allow 80
ufw allow 443
ufw enable
```

2. **Environment variables təhlükəsizliyi:**
   - `.env` faylında güclü şifrələr istifadə edin
   - `NEXTAUTH_SECRET` dəyişin
   - `POSTGRES_PASSWORD` dəyişin

### 🐛 Troubleshooting

**Database connection xətası:**
```bash
docker-compose logs postgres
docker-compose restart postgres
```

**Application başlamır:**
```bash
docker-compose logs app
docker-compose build --no-cache app
```

**Port məşğuldur:**
```bash
sudo lsof -i :3000
sudo kill -9 <PID>
```

### 📁 File Structure

```
project/
├── Dockerfile
├── docker-compose.yml
├── deploy.sh
├── nginx.conf
├── .env.production
└── uploads/
```

### 🎯 Production URLs

- **Main site:** https://yourdomain.com
- **Admin panel:** https://yourdomain.com/dashboard
- **Health check:** https://yourdomain.com/api/health

### 📝 Notes

- Admin login: `admin@quanta.com` / `admin123`
- Database data və uploads Docker volumes-də saxlanır
- Backup üçün PostgreSQL dump əlavə edin
- SSL certificate avtomatik yenilənir (90 gün)