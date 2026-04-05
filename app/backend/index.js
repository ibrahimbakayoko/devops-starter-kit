const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.send('Backend is running 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});