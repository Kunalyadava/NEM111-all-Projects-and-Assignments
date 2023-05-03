const express = require("express");
const app = express();


app.get("/multiply", (req, res) => {
  const { a, b } = req.query;

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Both "a" and "b" are required parameters' });
  }

  if (isNaN(a) || isNaN(b) || a === "" || b === "") {
    return res.status(400).json({ error: a === "" ? '"a" cannot be empty' : (b === "" ? '"b" cannot be empty' : (isNaN(a) ? '"a" is not a valid number' : '"b" is not a valid number')) });
  }

  const product = Number(a) * Number(b);
  res.json({ product });
});

module.exports = app;
