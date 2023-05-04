const mongoose=require("mongoose")

const userSchema=mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true},
    pass:{type:String,required:true},
    city:{type:String,required:true},
    age:{type:Number,required:true}
},{
    versionKey:false   

})
//creating userModel which is a const function
const  UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}