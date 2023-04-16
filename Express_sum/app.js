// your code goes here
const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) && isNaN(b)) {
    return res.status(400).json({ error: 'Both "a" and "b" are required parameters' });
  } else if (isNaN(a)) {
    return res.status(400).json({ error: '"a" is not a valid number' });
  } else if (isNaN(b)) {
    return res.status(400).json({ error: '"b" is not a valid number' });
  }

  const sum = a + b;

  if (sum === 0) {
    return res.json({ sum: 0 });
  } else if (a < 0 && b < 0) {
    return res.json({ sum });
  } else if (a < 0 || b < 0) {
    const negativeSum = a < 0 ? a + b : b + a;
    return res.json({ sum: negativeSum });
  }

  return res.json({ sum });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = app;
