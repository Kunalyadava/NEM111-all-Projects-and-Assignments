
const mongoose=require("mongoose")

//user Schema for the document
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
    UserModel
  };
  