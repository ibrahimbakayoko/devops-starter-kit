const express = require('express');
const cors = require('cors');
const client = require('prom-client');

const app = express();

app.use(cors());

// ✅ Collecte métriques système (CPU, RAM, etc.)
client.collectDefaultMetrics();

// ✅ Endpoint métier
app.get('/api', (req, res) => {
  res.send('Backend is running 🚀');
});

// ✅ Endpoint metrics pour Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors());

// app.get('/api', (req, res) => {
//   res.send('Backend is running 🚀');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });