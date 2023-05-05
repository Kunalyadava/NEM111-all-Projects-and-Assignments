const express=require("express")
const {UserModel }=require("../model/User.model")
 const jwt = require('jsonwebtoken');
const userRouter=express.Router()



//get the idea of how to go to
// flow of everything,how to build everything in a flow
//create a simple server then connect it to db then create the schema and
// write the logic in the end now follow MVC model
userRouter.post("/register",async (req,res)=>{
    //logic
    try{
        const user=new UserModel(req.body)
        await user.save()
        res.status(200).send({"msg":"New user has been registered"}) //send==json

    }catch (err){
        res.status(400).send({"err":err.msg})
    }

})
userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    //logic
    try{
        const user=await UserModel.findOne({email,pass})
       // console.log(user)   ////assignining token after login .
        if(user){
         const   token = jwt.sign({ course: 'FSD' }, 'masai'); //masai is secret key here or verifying signature 
            // res.status(200).send({"msg":"Login Successsful","token":"12345R"})
            res.status(200).send({"msg":"Login Successsful","token":token}) //itr will generate random token everytime /everytime after login token will change and this is not good
            
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