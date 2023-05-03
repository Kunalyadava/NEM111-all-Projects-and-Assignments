const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!req.query.a || !req.query.b) {
    return res.status(400).json({ error: 'Both "a" and "b" are required parameters' });
  }

  if (isNaN(a) && isNaN(b)) {
    return res.status(400).json({ error: 'Both "a" and "b" must be numbers' });
  }

  if (isNaN(a)) {
    return res.status(400).json({ error: '"a" is not a valid number' });
  }

  if (isNaN(b)) {
    return res.status(400).json({ error: '"b" is not a valid number' });
  }

  const sum = a + b;
  res.json({ sum });
});

module.exports = app;
