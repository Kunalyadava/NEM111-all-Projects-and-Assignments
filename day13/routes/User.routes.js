

const express=require("express")
const {UserModel }=require("../model/User.model")
// const {UserModel}
const userRouter=express.Router()




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
        console.log(user)
        if(user){
            res.status(200).send({"msg":"Login Successsful"})
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