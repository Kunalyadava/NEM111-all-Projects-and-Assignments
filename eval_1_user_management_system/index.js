// const http = require("http");
// const fs = require("fs");
// const os = require("os");
// const dns = require("dns");
// const cowsay = require("cowsay");

// const dataFilePath = "./data.json";
// const logsFilePath = "./logs.txt";

// let userCnt = 0; //To count the number of users


// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h1>HOME PAGE</h1>");
//     res.end();
//   } else if (req.url === "/count") {
//     fs.readFile(dataFilePath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end(err.toString());
//         return;
//       }
//       const users = JSON.parse(data);
//       userCnt = users.length;
//       const timestamp = new Date().toString();
//       const logMsg = `The initial user count is ${userCnt} at ${timestamp}\n`;
//       fs.appendFile(logsFilePath, logMsg, (err) => {
//         if (err) {
//           res.writeHead(500, { "Content-Type": "text/plain" });
//           res.end(err.toString());
//           return;
//         }
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("The user count has been updated in the logs file");
//       });
//     });
//   } else if (req.url === "/update") {
//     fs.readFile(dataFilePath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end(err.toString());
//         return;
//       }
//       const users = JSON.parse(data);
//       const id = Math.floor(Math.random() * (100 - userCnt) + userCnt);
//       const firstName = os.userInfo().username;
//       const lastName = os.userInfo().username;
//       const email = "test@example.com";
//       const gender = Math.random() < 0.5 ? "Male" : "Female";
//       const newUser = { id, firstName, lastName, email, gender };
//       users.push(newUser);
//       userCnt++;
//       const newUserData = JSON.stringify(users);
//       const timestamp = new Date().toString();
//       fs.writeFile(dataFilePath, newUserData, (err) => {
//         if (err) {
//           res.writeHead(500, { "Content-Type": "text/plain" });
//           res.end(err.toString());
//           return;
//         }
//         const logMsg = `Updated user count after adding a new user is ${userCnt} at ${timestamp}\n`;
//         fs.appendFileSync(logsFilePath, logMsg);
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("The data has been updated, go and check the data file");
//       });
//     });
//   } else if (req.url === "/users") {
//     fs.readFile(dataFilePath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/html" });
//         res.end(err.toString());
//         return;
//       }
//       const users = JSON.parse(data);
//       const userNames = users.map((user) => user.firstName);
//       let responseText = "Following are the users present in database:\n";
//       responseText += userNames.map((name) => `- ${name}`).join("\n");
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(responseText);
//     });
//   } else if (req.url === "/address") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(`Logs File has been updated`);
//   } else if (req.url === "/ip") {
//     dns.lookup(os.hostname(), (err, address, family) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end(err.toString());
//         return;
//       }
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end(`IP address of the server is ${address}`);
//     });
//   } else if (req.url === "/say") {
//     const cowMsg = cowsay.say({ text: "Moo!" });
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(cowMsg);
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Not Found");
//   }
// });


// module.exports = server;




const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("dns");
const cowsay = require("cowsay");

const dataFilePath = "./data.json";
const logsFilePath = "./logs.txt";

let userCnt = 0; //To count the number of users

// Create HTTP server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Home route
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>HOME PAGE</h1>");
    res.end();
  } else if (req.url === "/count") {
    // Count route
    fs.readFile(dataFilePath, (err, data) => {
      if (err) {
        res.writeHead(500, {"Content-Type":"text/plain" });
        res.end(err.toString());
        return;
      }
      const users = JSON.parse(data);
      userCnt = users.length;
      const timestamp = Date.now().toString();
      const logMsg = `The initial user count is ${userCnt} at ${timestamp}\n`;
      fs.appendFile(logsFilePath, logMsg, (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end(err.toString());
          return;
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("The user count has been updated in the logs file");
      });
    });
  } else if (req.url === "/update") {
    // Update route
    fs.readFile(dataFilePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(err.toString());
        return;
      }
      const users = JSON.parse(data);
      const newUserId = userCnt + 1;
      const firstName = os.userInfo().username;
      const lastName = os.userInfo().username;
      const newUser = {
        id: newUserId,
        first_name: firstName,
        last_name: lastName,
        email: "test@test.com",
        gender: "Male",
      };
      users.push(newUser);
      const updatedUsers = JSON.stringify(users);
      fs.writeFile(dataFilePath, updatedUsers, (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end(err.toString());
          return;
        }
        userCnt++;
        const timestamp = new Date().toString();
        const logMsg = `Updated user count after adding a new user is ${userCnt} at ${timestamp}\n`;
        fs.appendFileSync(logsFilePath, logMsg);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("The data has been updated, go and check the data file");
      });
    });
  } else if (req.url === "/users") {
    // Users route
    fs.readFile(dataFilePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(err.toString());
        return;
      }
      const users = JSON.parse(data);
            const userNames = users.map((user) => user.first_name);
            console.log(JSON.parse(data))
            let responseText = "Following are the users present in database:";
            responseText += userNames.map((name) => `<li>${name}</li>`).join("");
            // responseText += `<li>${users.firstName}</li>`;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(responseText);
          });
        }  else if (req.url === "/address") {
              res.writeHead(200, { "Content-Type": "text/plain" });
              res.end(`Logs File has been updated`);
            }
         else if (req.url === "/say") {
        fs.readFile(logsFilePath, (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end(err.toString());
            return;
          }
          const logMsg = data.toString();
          const cowMsg = cowsay.say({ text: logMsg });
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(cowMsg);
        });
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      }
    });
    
    module.exports = server;
    