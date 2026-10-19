const express = require('express');
const { tambah, kurang } = require('./math');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API DevSecOps Aktif');
});

app.get('/hitung', (req, res) => {
  const a = parseInt(req.query.a) || 0;
  const b = parseInt(req.query.b) || 0;
  res.json({ hasil: tambah(a, b) });
});

module.exports = app;
