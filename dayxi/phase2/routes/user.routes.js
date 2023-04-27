
const express=require("express")
const userRouter=express.Router()
const {UserModel}=require("../model/user.model")




//create
userRouter.post("/add",async (req, res) => {
    const payload = req.body;
    try{
    const user=new UserModel(payload)
    await user.save()
      //when our req is fulfilled it will give status code as well
    res.status(200).send({"msg":" User data added"}); ///it looks better
  }catch(err){
    //when our req is fulfilled it will give status code as well
    res.status(400).send({ "msg": err.msg }); //standardised way of sending response
  }
  });
  
  //Read
  
  
  // app.get("/",async(req,res)=>{
  //   try{
  //     const users=await UserModel.find()//responsile for reading everything
  //     res.status(200).send(users)
  //   }catch(err){
  //     res.status(400).send({"msg":err.message})
  //   }
  // })
   //if we want people of specific city handle the queries in backend// there is no need of separate route for query 
  
   userRouter.get("/",async(req,res)=>{
    const query=req.query
    // console.log(query)
  
    try{
      const users=await UserModel.find(query)//to use find as filter command pass query here//
      // if no query is passes then it will ahow all data 
      //if the query is to find lang and city then pass it in local host like localhost:8000/users?city=JJP&language=Eng
      //there is no need to pass city and lang. in line 46
      //HOW CAN WE ADD AGE MORE THAN 10 OR 20 const users=await UserModel.find({age:{$gte:10}})  (comment out line 42)
      res.status(200).send(users)
    }catch(err){
      res.status(400).send({"msg":err.message})
    }
  })
  
  
  
  // lets see delete if we want to delete a particular user we need their particular id , 
  //so need params
  //
  
  //update 
  userRouter.patch("/update/:userID",async (req,res)=>{
    const {userID}=req.params
    const payload=req.body
    try{
     await UserModel.findByIdAndUpdate({_id:userID},payload)
     res.status(200).send({"msg":" User data updated"})
    } catch(err){
     res.status(400).send({"msg":err.message})
    }
    
  })
  //delete
  userRouter.delete("/delete/:userID",async (req,res)=>{
     const {userID}=req.params
     try{
      await UserModel.findByIdAndDelete({_id:userID})
      res.status(200).send({"msg":" User data deleted"})
     } catch(err){
      res.status(400).send({"msg":err.message})
     }
     
  })
  module.exports={
    userRouter
  }