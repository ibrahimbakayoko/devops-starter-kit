#!/bin/bash

set -e

echo "🚀 Starting deployment..."

# =========================
# 1. Check docker & compose
# =========================
command -v docker >/dev/null 2>&1 || { echo "❌ Docker is not installed"; exit 1; }

# =========================
# 2. Pull images
# =========================
echo "📥 Pulling latest Docker images..."
docker compose pull

# =========================
# 3. Restart stack
# =========================
echo "🛑 Stopping containers..."
docker compose down

echo "🚀 Starting containers..."
docker compose up -d

# =========================
# 4. Optional: show status
# =========================
echo "🔍 Containers status:"
docker ps

echo "✅ Deployment successful!"