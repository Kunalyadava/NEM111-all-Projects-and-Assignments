const fs = require('fs');
const logger = (req, res, next) =>{
    fs.appendFileSync('logs.txt', `Method: ${req.method}, Route:${req.url}, user-agent:${req.get("User-Agent")}\n`);
}

module.exports = logger