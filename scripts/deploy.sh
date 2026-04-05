#!/bin/bash

echo "🚀 Starting deployment..."

docker-compose down
docker-compose build
docker-compose up -d

echo "✅ App deployed!"