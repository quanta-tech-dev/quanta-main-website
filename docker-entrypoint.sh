#!/bin/sh
set -e

echo "🚀 Starting Quanta Application..."

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
until npx prisma db execute --stdin <<< "SELECT 1;" > /dev/null 2>&1; do
  echo "⏳ Database is unavailable - sleeping"
  sleep 2
done

echo "✅ Database is ready!"

# Run Prisma migrations (PRODUCTION SAFE)
echo "🔄 Running database migrations..."
npx prisma migrate deploy

# Start the application
echo "🎉 Starting Next.js application..."
exec node server.js