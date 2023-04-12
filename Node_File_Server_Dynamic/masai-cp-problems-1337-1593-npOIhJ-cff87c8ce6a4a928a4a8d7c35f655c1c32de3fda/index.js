const http = require("http");
const fs = require("fs");
const PORT = 7700;
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const route = pathname === '/' ? '/' : pathname.split('/')[1];
    const filePath = path.join(__dirname, route, pathname.substring(route.length + 1));

    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.statusCode = 404;
            res.end('404 Not Found');
        } else {
            if (stats.isDirectory()) {
                fs.readdir(filePath, (err, files) => {
                    if (err) {
                        res.statusCode = 404;
                        res.end('404 Not Found');
                    } else {
                        const list = files.map(file => `${file}`).join('\n');
                        res.end(list);
                    }
                });
            } else {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        res.statusCode = 404;
                        res.end('404 Not Found');
                    } else {
                        res.end(data);
                    }
                });
            }
        }
    });
});

module.exports = server;