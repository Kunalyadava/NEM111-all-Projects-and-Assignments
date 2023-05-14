const express=require("express")
const {UserModel }=require("../model/User.model")
 const jwt = require('jsonwebtoken');
 const bcrypt=require('bcrypt')

const userRouter=express.Router()



//get the idea of how to go to
// flow of everything,how to build everything in a flow
//create a simple server then connect it to db then create the schema and
// write the logic in the end now follow MVC model
userRouter.post("/register",async (req,res)=>{
    const{email,pass,name,age,city}=req.body
    //logic
    try{
// bcrypt.hash(pass,saltRounds,function(err,hash){
    bcrypt.hash(pass,2,async (err,hash)=>{
        const user=new UserModel({email,name,age,pass:hash,city})
        await user.save()
        res.status(200).send({"msg":"New user has been registered"}) //send==json
    })
    }catch (err){
        res.status(400).send({"err":err.msg})
    }
    //store hash in your db
})


userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    //logic
    try{
        const user=await UserModel.findOne({email})
       // console.log(user)   ////assignining token after login .
        if(user){
            bcrypt.compare(pass,user.pass,(err,result)=>{
                if(result){
                    const   token = jwt.sign({ course: 'FSD' }, 'masai'); //masai is secret key here or verifying signature 
            // res.status(200).send({"msg":"Login Successsful","token":"12345R"})
            res.status(200).send({"msg":"Login Successsful","token":token}) //itr will generate random token everytime /everytime after login token will change and this is not good
            
                }else{
                    res.status(200).send({"msg":"Wrong Credientials"})
                }
            })
        }else{
            res.status(200).send({"msg":"Wrong Credientials"})
        }

    }catch(err){
        res.status(400).send({"err":err.msg})
    }

})    


module.exports={
    userRouter
}