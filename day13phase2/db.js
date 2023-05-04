//for connction to the database
const mongoose=require("mongoose")
const connection =mongoose.connect("mongodb://localhost:27017/microsoft")
//microsoft is db name

module.exports={
connection
}

