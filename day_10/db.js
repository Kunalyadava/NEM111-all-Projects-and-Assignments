//connection logic // or this is the separate file for connection

const mongoose=require("express")
const connection=mongoose.connect("mongodb://127.0.0.1.27017/")


module.exports={connection}