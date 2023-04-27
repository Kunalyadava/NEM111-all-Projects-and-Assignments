 // MVC is abbreviated as Model View Controller is a design pattern created for 
// developing applications specifically web applications. As the name suggests, 
// it has three major parts. The traditional software design pattern works in an 
// "Input - Process - Output" pattern whereas MVC works as "Controller -Model - View"
//  approach. With the emergence of the MVC model, creation of application takes different 
//  aspects individually into consideration. These aspects of the application are:
// UI Logic
// Input logic
// Business Logic
// It provides a clear separation of business logic, Ul logic, and input logic.
// It offers full control over your HTML and URLs which makes it easy to
                                     //  design web application architecture.
// It is a powerful URL-mapping component using which we can build applications that 
                                       // have comprehensible and searchable URLs.
// It supports Test Driven Development (TDD).
// Components of MVC :

// The MVC framework includes the following 3 components:

// Controller
// Model
// View




//Mongodb Atlas(cloud based mong0db)
// ATLAS
// Database. Deploy amulti-cloud database.
// The most advanced cloud database service on the market,
//  with unmatched data distribution and mobility across AWS, Azure, and Google
//  Cloud, built-in automation for resource and workload optimization, and so much more.

//it will start from day 10

const express = require("express");
const { connection } = require("./db");
require("dotenv").config()
const {userRouter}=require("./routes/user.routes")



const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});


app.use("/users",userRouter)

//https://mongoosejs.com/docs/queries.html


//post req will insert data to database//data will be presented inside the body so


//whenever server is running ,it should automatically gets connected to mongo
// app.listen(8000, async () => {
    app.listen(process.env.port, async () => {
    // await mongoose.connect("mongodb://127.0.0.1.27017/"); //connectiong app.listen to mongo //
    // we are transferring it to db.js file to look more better
  try {
    await connection;
    //if you want to disconnect //connection.disconnect
    console.log("connectedto Mongo");
  } catch (err) {
    console.log("not able to connect mongodb");
    console.log(err);
  }
  console.log("app is running on port ${process.env.port}");
});
   //if we want people of specific city handle the queries in backend// there is no need of separate route for query 