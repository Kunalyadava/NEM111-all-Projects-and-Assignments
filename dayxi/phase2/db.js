//connection logic // or this is the separate file for connection

const mongoose = require("mongoose");
require("dotenv").config() 

const connection = mongoose.connect(process.env.mongoURL); //to hide our database link after publishing it in githubv


  module.exports={
    connection
  };
  
