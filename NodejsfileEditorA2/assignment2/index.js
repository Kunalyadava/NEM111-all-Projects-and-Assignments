const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case "read":
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });
    break;
  case "delete":
    fs.rm(file, (err) => {
      if (err) console.log(err);
      else console.log("Data Deleted");
    });
    break;
  case "create":
    fs.writeFile(file, "", (err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });
    break;
  case "append":
    fs.appendFile(file, `\n${content}`, (err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });
    break;
  case "rename":
    fs.rename(file, content, (err) => {
      if (err) console.log(err);
    });
    break;
  case "list":
    fs.readdir(file, (err, files) => {
      if (err) console.log(err);
      else {
        console.log(files);
      }
    });

    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}
