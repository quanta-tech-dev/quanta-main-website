# Quanta Website - Deployment Guide

Bu proyekt tam olaraq Docker containerize olunub və PostgreSQL database ilə birlikdə deploy üçün hazırdır.

## 📋 Sistem Tələbləri

- Docker Engine 20.10+
- Docker Compose 2.0+
- Minimum 2GB RAM
- 10GB disk space

## 🚀 Deploy Addımları

### 1. Proyekti Serverə Köçürmək

```bash
# Git ilə clone et
git clone <repository-url>
cd quanta-main-website

# Və ya scp ilə upload et
scp -r quanta-main-website user@server:/path/to/deployment
```

### 2. Environment Variables Konfiqurasiya Etmək

```bash
# .env.production faylını kopyalayıb düzəlt
cp .env.example .env.production

# .env.production faylını redaktə et
nano .env.production
```

**Vacib:** Aşağıdakı dəyərləri mütləq dəyişdirməlisiniz:

```env
# Güclü parol təyin et
POSTGRES_PASSWORD=your-strong-password-here

# JWT secret üçün təsadüfi key yaradın
# openssl rand -base64 32 ilə yarada bilərsiniz
ADMIN_JWT_SECRET=your-super-secret-jwt-key-here

# Domain adınızı yazın
SITE_URL=https://yourdomain.com

# Admin kredensiallarını dəyişdirin
DEFAULT_ADMIN_EMAIL=admin@yourdomain.com
DEFAULT_ADMIN_PASSWORD=strong-admin-password
```

### 3. SSL Sertifikatı Hazırlamaq (Optional - Nginx üçün)

Əgər HTTPS istəyirsinizsə:

```bash
# ssl qovluğu yarat
mkdir -p ssl

# Let's Encrypt ilə sertifikat əldə et
# Və ya öz sertifikatınızı ssl/ qovluğuna əlavə et
# fullchain.pem və privkey.pem faylları olmalıdır
```

nginx.conf faylında SSL ayarlarını aktivləşdirin (comment-ləri silin).

### 4. Docker Containers Qaldırmaq

#### Option A: Bütün Xidmətlər (App + Database + Nginx)

```bash
# Bütün container-ləri qaldır
docker-compose up -d

# Logları izlə
docker-compose logs -f
```

#### Option B: Yalnız App + Database (Nginx-siz)

Əgər öz reverse proxy-niz varsa (Nginx/Caddy/Traefik):

```bash
# Yalnız app və postgres xidmətlərini qaldır
docker-compose up -d postgres app

# Port 3000-ə birbaşa bağlan
```

### 5. Database-in Hazır Olduğunu Yoxlamaq

```bash
# Container-lərin vəziyyətini yoxla
docker-compose ps

# App log-larını yoxla
docker-compose logs app

# Aşağıdakı mesajları görməlisiniz:
# ✅ Database is ready!
# 🔄 Running database migrations...
# 🎉 Starting Next.js application...
```

### 6. Tətbiqin İşlədiyini Test Etmək

```bash
# Health check endpoint
curl http://localhost:3000/api/health

# Və ya brauzer ilə aç
http://your-server-ip:3000

# Nginx ilə (port 80/443)
http://yourdomain.com
https://yourdomain.com
```

## 🔧 İdarəetmə Əmrləri

### Container-ləri İdarə Etmək

```bash
# Başlat
docker-compose up -d

# Dayandır
docker-compose down

# Yenidən başlat
docker-compose restart

# Log-lara bax
docker-compose logs -f

# Yalnız app log-ları
docker-compose logs -f app

# Container-lərin vəziyyəti
docker-compose ps
```

### Database Əməliyyatları

```bash
# Postgres container-ə daxil ol
docker-compose exec postgres psql -U quantauser -d quantadb

# Database backup
docker-compose exec postgres pg_dump -U quantauser quantadb > backup.sql

# Backup restore
docker-compose exec -T postgres psql -U quantauser quantadb < backup.sql

# Prisma Studio açmaq (database GUI)
docker-compose exec app npx prisma studio
```

### Kodu Yeniləmək (Update/Redeploy)

```bash
# 1. Yeni kodu götür
git pull origin main

# 2. Container-ləri dayandır
docker-compose down

# 3. Yeni image build et
docker-compose build --no-cache

# 4. Yenidən qaldır
docker-compose up -d

# 5. Log-ları yoxla
docker-compose logs -f app
```

## 📊 Monitoring və Troubleshooting

### Sistem Resurslarını İzləmək

```bash
# Container-lərin resurs istifadəsi
docker stats

# Disk istifadəsi
docker system df
```

### Problemləri Həll Etmək

#### Database bağlanmır

```bash
# Database container-in loglarını yoxla
docker-compose logs postgres

# Database-in health statusunu yoxla
docker-compose ps postgres

# Container-i yenidən başlat
docker-compose restart postgres
```

#### App başlamır

```bash
# App loglarını yoxla
docker-compose logs app

# Database environment variables yoxla
docker-compose exec app env | grep DATABASE_URL

# Prisma schema push-u manual işlət
docker-compose exec app npx prisma db push
```

#### Port artıq istifadədədir

```bash
# Hansı proses istifadə edir yoxla
sudo lsof -i :3000
sudo lsof -i :5432

# docker-compose.yml-də portları dəyişdir
# məsələn: "8080:3000" əvəzinə "3000:3000"
```

## 🔐 Təhlükəsizlik Tövsiyələri

1. **Güclü Parollar**: Mütləq bütün default parolları dəyişdirin
2. **Firewall**: Yalnız lazımi portları açın (80, 443)
3. **SSL/TLS**: Production-da HTTPS istifadə edin
4. **Backup**: Gündəlik database backup-ı təşkil edin
5. **Updates**: Sistemin və Docker image-lərin yenilənməsini izləyin
6. **Logs**: Log fayllarını monitör edin

## 🌐 Production Checklist

Deploy etməzdən əvvəl:

- [ ] .env.production faylında bütün secret key-lər dəyişdirilib
- [ ] POSTGRES_PASSWORD güclü parol təyin edilib
- [ ] ADMIN_JWT_SECRET təsadüfi key ilə əvəz edilib
- [ ] SITE_URL düzgün domain ilə təyin edilib
- [ ] SSL sertifikatları quraşdırılıb (HTTPS üçün)
- [ ] Firewall konfiqurasiyası edilib
- [ ] Backup strategiyası qurulub
- [ ] Domain DNS ayarları düzgün konfiqurasiya edilib
- [ ] Email notifications konfiqurasiya edilib (əgər varsa)

## 📞 Əlaqə və Dəstək

Problemlə qarşılaşsanız:

1. Log fayllarını yoxlayın: `docker-compose logs`
2. GitHub Issues-də yeni issue açın
3. Admin panel: http://yourdomain.com/dashboard/login

---

**Son Yeniləmə**: 2025-10-17
**Versiya**: 1.0.0
