![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)
![CI/CD](https://img.shields.io/badge/CI/CD-GitHub_Actions-black?logo=githubactions)
![Monitoring](https://img.shields.io/badge/Monitoring-Prometheus_&_Grafana-orange)
![License](https://img.shields.io/badge/License-MIT-green)

Deploy a **production-ready fullstack application** in minutes.
# 🚀 DevOps Starter Kit


Skip weeks of setup.  
Start building and shipping immediately.

---

## 💥 Why this matters

Setting up a real-world environment is hard:

- Complex infrastructure  
- CI/CD configuration  
- Database setup  
- Monitoring & debugging  

👉 This kit gives you everything **pre-configured and ready to use**.

---

## 🎯 What you get

- Fullstack application (Frontend + Backend + PostgreSQL)  
- Dockerized environment (1 command to run)  
- CI/CD pipeline with GitHub Actions  
- Monitoring with Prometheus & Grafana  
- Clean and scalable project structure  
- Ready for development **or** production  

<p align="center">
  <img src="https://raw.githubusercontent.com/ibrahimbakayoko/devops-starter-kit/main/docs/Capture%20d%E2%80%99%C3%A9cran%201.png" width="45%" />
  <img src="https://raw.githubusercontent.com/ibrahimbakayoko/devops-starter-kit/main/docs/Capture%20d%E2%80%99%C3%A9cran%202.png" width="45%" />
</p>

---

## ⚙️ Tech Stack

- Docker & Docker Compose  
- Node.js (Backend)  
- React (Frontend)  
- PostgreSQL  
- GitHub Actions  
- Prometheus & Grafana  

---

## 📐 Architecture

<p align="center">
  <img src="https://raw.githubusercontent.com/ibrahimbakayoko/devops-starter-kit/main/docs/architecture-devops-starter-kits.png" width="80%" />
</p>

Frontend → Backend → PostgreSQL

Monitoring Stack:
Prometheus → Grafana

## 📦 Project Structure

```
app/
backend/
frontend/
docker/
monitoring/
.github/workflows/
scripts/
docker-compose.yml
.env.example
```

---

## 🚀 Quick Start

```
git clone https://github.com/your-username/devops-starter-kit.git
cd devops-starter-kit

cp .env.example .env

docker compose up -d
```

---

## 🔗 Access your services

| Service | URL |
| --- | --- |
| Frontend | http://localhost:5173 |
| Backend | http://localhost:3000 |
| Grafana | http://localhost:3001 |
| Prometheus | http://localhost:9090 |

---

## 🧩 Environment Variables

```
Copy the example file:

cp .env.example .env
Then update:
Database credentials
API URLs

```

---

## 🔄 CI/CD Pipeline

This project includes a ready-to-use GitHub Actions pipeline:

- Build & test backend
- Build frontend
- Linting
- Docker image build
- Docker Hub push

👉 Located in:

.github/workflows/

## 🔄 CI/CD Pipeline

![CI/CD Pipeline](https://raw.githubusercontent.com/ibrahimbakayoko/devops-starter-kit/refs/heads/main/docs/pipeline.png)

---

## 📈 Monitoring Included

- Prometheus → metrics collection
- Grafana → dashboards

![Grafana Dashboard](https://raw.githubusercontent.com/ibrahimbakayoko/devops-starter-kit/main/docs/dashboard%20grafana.png)

Start everything with:

docker compose up -d

---

## 🧠 Perfect for

- DevOps engineers
- Fullstack developers
- Students learning Docker & CI/CD
- Anyone who wants a production-ready base

---

## 📈 What you save

⚡ Days (or weeks) of setup
💸 Cost of infrastructure mistakes
🧠 Mental energy on configuration

---

## 🔥 Next steps

- Add your own features
- Deploy to cloud
- Customize and scale

---

## ⭐ Support the project

If you like this project:
⭐ Star the repository
🔁 Share with other developers
🚀 Follow for more DevOps templates