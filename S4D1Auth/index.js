const express = require("express")
require("dotenv").config()
const { connectionDB } = require("./db")
const { userRouter } = require("./routes/user.route")

const app = express()

// Middlewares
app.use(express.json())

app.use("/user", userRouter);


// Server listening on port and connected to DB
app.listen(process.env.port, () => {
    connectionDB()
    console.log(`Server listening on port ${process.env.port}`);
})
