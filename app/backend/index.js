const express = require('express');
const cors = require('cors');
const client = require('prom-client');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// ===============================
// Prometheus Metrics
// ===============================
client.collectDefaultMetrics();

// Custom metric (🔥 valeur ajoutée template)
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
});

// ===============================
// PostgreSQL Connection
// ===============================
const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Retry logic (important en Docker)
const connectWithRetry = async () => {
  try {
    await pool.query('SELECT 1');
    console.log('✅ Connected to PostgreSQL');
  } catch (err) {
    console.error('❌ DB not ready, retrying in 5s...');
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

// ===============================
// Routes
// ===============================

// Healthcheck (🔥 indispensable)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Basic API
app.get('/api', (req, res) => {
  httpRequestCounter.inc();
  res.send('Backend is running 🚀');
});

// DB test endpoint
app.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      success: true,
      timestamp: result.rows[0],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// ===============================
// Start server
// ===============================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// const express = require('express');
// const cors = require('cors');
// const client = require('prom-client');

// const app = express();

// app.use(cors());

// // ✅ Collecte métriques système (CPU, RAM, etc.)
// client.collectDefaultMetrics();

// // ✅ Endpoint métier
// app.get('/api', (req, res) => {
//   res.send('Backend is running 🚀');
// });

// // ✅ Endpoint metrics pour Prometheus
// app.get('/metrics', async (req, res) => {
//   res.set('Content-Type', client.register.contentType);
//   res.end(await client.register.metrics());
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });