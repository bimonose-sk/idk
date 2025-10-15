const express = require('express');
const app = express();
const port = 3000;

// Suma: /sum?a=5&b=3 => 8
app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send({ result: a + b });
});

// Resta: /subtract?a=5&b=3 => 2
app.get('/subtract', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send({ result: a - b });
});

// Multiplicación: /multiply?a=5&b=3 => 15
app.get('/multiply', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send({ result: a * b });
});

// División: /divide?a=6&b=3 => 2
app.get('/divide', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (b === 0) {
    res.status(400).send({ error: 'No se puede dividir entre 0' });
  } else {
    res.send({ result: a / b });
  }
});

app.listen(port, () => {
  console.log(`Math app escuchando en http://localhost:${port}`);
});