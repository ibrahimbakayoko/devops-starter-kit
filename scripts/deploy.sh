#!/bin/bash

set -e

echo "🚀 Starting deployment..."

echo "🔄 Updating code..."
git pull

echo "📥 Pulling latest images..."
docker compose pull

echo "🛑 Stopping containers..."
docker compose down

echo "🚀 Starting containers..."
docker compose up -d

echo "🧹 Cleaning..."
docker system prune -f

echo "✅ App deployed successfully!"