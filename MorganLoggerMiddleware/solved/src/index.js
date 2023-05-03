const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

// create a write stream (in append mode) for log file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'src/access.log'),
  { flags: 'a' }
);

// setup the logger
app.use(
  morgan(
    ':method :status :res[content-length] :response-time ms :date[web] HTTP/:http-version :url\n',
    {
      stream: accessLogStream,
    }
  )
);

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to server' });
});

app.get('/get-users', (req, res) => {
  res.status(200).json({ message: 'here is the list of all users' });
});

app.post('/add-user', (req, res) => {
  res.status(201).json({ message: 'user added successfully' });
});

app.put('/user/:id', (req, res) => {
  const { id } = req.params;
  res.status(201).json({ message: `user ${id} updated successfully` });
});

app.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `user ${id} deleted successfully` });
});

module.exports = app;
