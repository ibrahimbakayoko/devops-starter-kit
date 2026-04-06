#!/bin/bash

set -e

echo "🚀 Starting deployment..."

echo "🔄 Updating code..."
git pull --rebase

echo "📥 Pulling latest images..."
docker compose pull

echo "🛑 Stopping containers..."
docker compose down

echo "🚀 Starting containers..."
docker compose up -d

echo "🧹 Cleaning unused resources..."
docker system prune -f

echo "✅ Deployment completed!"