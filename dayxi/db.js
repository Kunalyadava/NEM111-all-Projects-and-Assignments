//connection logic // or this is the separate file for connection

const mongoose = require("mongoose");
require("dotenv").config() 

const connection = mongoose.connect(process.env.mongoURL); //to hide our database link after publishing it in githubv

//user Schema for
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    isMarried: Boolean,
    city: String,
    language: String
  },{
      versionKey:false
  });
  //usermodel
  const UserModel = mongoose.model("user", userSchema); //creating model
  module.exports= {
    connection,
    UserModel
  };
  
