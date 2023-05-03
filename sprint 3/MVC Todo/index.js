const express = require("express");
const { connection } = require("./configs/db");
const { TodoModel } = require("./models/Todo.model");

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("HOME PAGE")
})

app.get("/data", async (req, res) => {
    let query = req.query
    // console.log(query);
    try {
        const data = await TodoModel.find(query)
        res.send(data);
    } catch (err) {
        res.send({ "message": "Cannot get the Data", "error": err.message })
    }
});

app.post("/create", async (req, res) => {
    const todoDetail = req.body
    try {
        const data = new TodoModel(todoDetail)
        await data.save()
        res.send({ "msg": "Data Registered" })
    } catch (err) {
        res.send({ "msg": "Something went wrong", "error": err.message })
    }
})

app.patch("/update/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await TodoModel.findByIdAndUpdate({ _id: ID }, payload)
        res.send({ "message": "Data has been updated" })
    } catch (err) {
        res.send({ "message": "Cannot modify the data", "error": err.message })
    }
})


app.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        await TodoModel.findByIdAndDelete({ _id: ID })
        res.send("Data Deleted Successfully")

    } catch (err) {
        res.send({ "message": "Cannot Delete the Data", "error": err.message })
    }
})



app.listen(2000, async () => {
    try {
        await connection
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
    }
    console.log("Server running on port http://localhost:2000/")
})