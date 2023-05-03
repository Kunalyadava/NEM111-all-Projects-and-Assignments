const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  let db = fs.readFileSync("db.json");
  db = JSON.parse(db);
  res.send(db.todos);
});

app.post("/", (req, res) => {
  let db = fs.readFileSync("db.json");
  db = JSON.parse(db);
  const newTodo = req.body;
  if (!newTodo.id || !newTodo.task || newTodo.status === undefined) {
    return res.status(400).send("Invalid argument");
  }
  db.todos.push(newTodo);
  fs.writeFileSync("db.json", JSON.stringify(db));
  res.send(db.todos);
});

app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let db = fs.readFileSync("db.json");
  db = JSON.parse(db);
  const updatedTodo = req.body;
  if (!updatedTodo.task || updatedTodo.status === undefined) {
    return res.status(400).send("Invalid argument");
  }
  const index = db.todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(400).send("Invalid argument");
  }
  db.todos[index].task = updatedTodo.task;
  db.todos[index].status = updatedTodo.status;
  fs.writeFileSync("db.json", JSON.stringify(db));
  res.send(db.todos);
});

app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let db = fs.readFileSync("db.json");
  db = JSON.parse(db);
  const index = db.todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(400).send("Invalid argument");
  }
  db.todos.splice(index, 1);
  fs.writeFileSync("db.json", JSON.stringify(db));
  res.send(db.todos);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
