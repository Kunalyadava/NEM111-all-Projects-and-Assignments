
//record: This middleware will keep a record of all the players which are deleted or updated along with the time at which they are deleted or updated in a "records.txt" file, an example has been given below.

const fs = require("fs");

const record = (req, res, next) => {
    let id = req.url.split('/')[2];
    let date = Date();

    if (req.method === "PATCH") {
        fs.appendFile('records.txt', `The player with id:${id} has been updated | ${date}.\n`, (err) => {
            if (err) {
                res.status(400).send(err.message)
            } else {
                next();
            }
        })
    }


    if (req.method === "DELETE") {
        fs.appendFile('records.txt', `The player with id:${id} has been deleted | ${date}.\n`, (err) => {
            if (err) {
                res.status(400).send(err.message)
            } else {
                next();
            }
        })
    }
}


module.exports = {
    record
}