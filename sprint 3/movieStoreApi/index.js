const express = require('express');
const { connectionDB } = require("./Database/db")
const { movieRouter } = require("./Routes/movie.route")
require("dotenv").config()


const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    res.send({ "msg": "Movie Store API" })
})

app.use("/movie", movieRouter);


app.listen(process.env.port, async () => {
    try {
        await connectionDB
        console.log("Connected to DB");
    } catch (error) {
        console.log("Cannot connect to DB");
        console.log(error.message);
    }
    console.log(`Server listening on port ${process.env.port}`);
})