# DevOps Starter Kit PRO — Technical Guide

This guide provides technical instructions to run and operate the project.

---

## ⚙️ Requirements

- Docker
- Docker Compose
- Git

Verify installation:

```
docker --version
docker compose version
```

## 📥 Setup

Clone the repository:

```
git clone https://github.com/your-username/devops-starter-kit.git
cd devops-starter-kit
```

Create environment file:
```
cp .env.example .env
🔧 Configuration

Edit .env:

POSTGRES_USER=devuser
POSTGRES_PASSWORD=devpass
POSTGRES_DB=devdb

DB_HOST=db
DB_PORT=5432
DB_USER=devuser
DB_PASSWORD=devpass
DB_NAME=devdb
```

## 🚀 Run the project

Start all services:
```
docker compose up -d

OR recommended script:

chmod +x scripts/deploy.sh
./scripts/deploy.sh
```
## 🔗 Services
Frontend → http://localhost:5173  
Backend → http://localhost:3000/api  
Grafana → http://localhost:3001   
Prometheus → http://localhost:9090  

## 📊 Monitoring Setup
Grafana login:
admin / admin
Add Prometheus datasource:

URL:

http://prometheus:9090  
Import Dashboard:

File:

monitoring/grafana-dashboard.json

Steps:

Grafana → Dashboards → Import  
Upload JSON file  
Select Prometheus datasource


## 🔁 CI/CD Pipeline (Optional)

The project includes a GitHub Actions pipeline.

👉 Not required for local execution.

Pipeline location:

.github/workflows/  
Default usage:

No setup required — use Docker images from Docker Hub.
```
docker compose up -d
```
Advanced usage:

Requires GitHub Secrets:

DOCKER_USERNAME  
DOCKER_PASSWORD  
🧯 Troubleshooting  

View logs:
```
docker compose logs -f
```

Restart services:
```
docker compose restart
```

Reset environment:
```
docker compose down -v
docker compose up -d
```

🧠 Notes
Use .env for configuration
Backend depends on database startup time
Prebuilt Docker images are used by default
CI/CD is optional