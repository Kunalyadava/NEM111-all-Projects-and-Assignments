const express = require('express')
require("dotenv").config();
const { connectionDB } = require('./db');
const { footballRouter } = require('./routes/football.route')


const app = express();

app.use(express.json());
app.use("/football", footballRouter);


app.get("/", (req, res) => {
    res.status(200).send("Welcome to Football Web Application !!!")
})

app.listen(process.env.port, () => {
    connectionDB()
    console.log(`Server is  running on port ${process.env.port}.`)
})