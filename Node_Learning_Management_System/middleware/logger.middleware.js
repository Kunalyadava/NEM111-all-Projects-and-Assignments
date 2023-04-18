
// write the logic for logger middleware and export it.

const fs = require('fs');

const logger = (req, res, next) => {
  const { method, url, headers: { 'user-agent': userAgent } } = req;
  const logMessage = `Method: ${method}, Route: ${url}, user-agent: ${userAgent}\n`;
  fs.appendFile('logs.txt', logMessage, (err) => {
    if (err) console.log(err);
  });
  next();
};

module.exports = logger;
