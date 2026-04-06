#!/bin/bash

set -e

echo "🚀 Starting deployment..."

# =========================
# 1. Vérifier si le repo est un repo Git
# =========================
if [ ! -d ".git" ]; then
  echo "❌ Not a git repository"
  exit 1
fi

# =========================
# 2. Sauvegarde des changements locaux (si besoin)
# =========================
echo "🔍 Checking working directory..."

if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️ Uncommitted changes detected → stashing..."
  git stash -u || true
else
  echo "✅ Working directory clean"
fi

# =========================
# 3. Mise à jour du code
# =========================
echo "🔄 Pulling latest code..."
git pull --rebase || {
  echo "❌ Git pull failed"
  exit 1
}

# =========================
# 4. Restaurer les changements locaux (optionnel)
# =========================
if git stash list | grep -q "stash@"; then
  echo "📦 Restoring stashed changes..."
  git stash pop || true
fi

# =========================
# 5. Gestion Docker
# =========================
echo "📥 Pulling latest Docker images..."
docker compose pull || true

echo "🛑 Stopping containers..."
docker compose down || true

echo "🚀 Starting containers..."
docker compose up -d || {
  echo "❌ Docker Compose failed"
  exit 1
}

# =========================
# 6. Nettoyage sécurisé
# =========================
echo "🧹 Cleaning unused Docker resources..."
docker system prune -f || true

# =========================
# 7. Vérification finale
# =========================
echo "🔍 Checking running containers..."
docker ps

echo "✅ Deployment successful!"