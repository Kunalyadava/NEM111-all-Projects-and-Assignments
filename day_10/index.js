// Mongoose is a MongoDB object modeling tool designed to work in
// an asynchronous environment.
// Mongoose supports Node.js and Deno (alpha).
// Mongoose
// 1 connection to database
// 2 Defining the structure of document
// i  schema  ii model
// 3 validation

const express = require("express");
const mongoose = require("mongoose");
const {connection}=require("./db")

const app = express();
app.get("/", (req, res) => {
  res.end("Home page");
});
// app.get("/reports",(req,res)=>{
//     res.end("Reports Page")
// })
//whenever server is running ,it should automatically gets connected to mongo
app.listen(8080, async () => {
  try {
// await mongoose.connect("mongodb://127.0.0.1.27017/"); //connectiong app.listen to mongo // we are transferring it to db.js file to look more better 
  await connection 
console.log("connected to mongo");
  } catch (err) {
    console.log("Not anble to connect to mongo");
    console.log(err);
  }

  console.log("App running in the port 8080");
});
