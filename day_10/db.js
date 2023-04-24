//connection logic // or this is the separate file for connection

const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://127.0.0.1:27017/metausers");
//metausers is databse name
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
module.exports = {
  connection,
  UserModel
};
