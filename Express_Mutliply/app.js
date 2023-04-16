// your code goes here
const express = require('express');

const app = express();
const port = 3000;

app.get('/multiply', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  if (!a || !b) {
    return res.status(400).json({ error: '"a" and "b" are required parameters' });
  }

  if (isNaN(a)) {
    return res.status(400).json({ error: '"a" is not a valid number' });
  }

  if (isNaN(b)) {
    return res.status(400).json({ error: '"b" is not a valid number' });
  }

  const product = Number(a) * Number(b);
  return res.json({ product });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
