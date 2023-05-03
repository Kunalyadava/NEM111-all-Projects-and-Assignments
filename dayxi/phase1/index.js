


//Mongodb Atlas(cloud based mong0db)


// ATLAS
// Database. Deploy amulti-cloud database.
// The most advanced cloud database service on the market,
//  with unmatched data distribution and mobility across AWS, Azure, and Google
//  Cloud, built-in automation for resource and workload optimization, and so much more.



//it will start from day 10


const express = require("express");
const { connection } = require("./db");
const {UserModel}=require("./db")
require("dotenv").config()



const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});




//https://mongoosejs.com/docs/queries.html


//post req will insert data to database//data will be presented inside the body so

//create
app.post("/adduser",async (req, res) => {
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

app.get("/",async(req,res)=>{
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
app.patch("/updateuser/:userID",async (req,res)=>{
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
app.delete("/deleteuser/:userID",async (req,res)=>{
   const {userID}=req.params
   try{
    await UserModel.findByIdAndDelete({_id:userID})
    res.status(200).send({"msg":" User data deleted"})
   } catch(err){
    res.status(400).send({"msg":err.message})
   }
   
})


//whenever server is running ,it should automatically gets connected to mongo
// app.listen(8000, async () => {
    app.listen(process.env.port, async () => {
    // await mongoose.connect("mongodb://127.0.0.1.27017/"); //connectiong app.listen to mongo //
    // we are transferring it to db.js file to look more better
  try {
    await connection;
    //if you want to disconnect //connection.disconnect
    console.log("connectedto Mongo");
  } catch (err) {
    console.log("not able to connect mongodb");
    console.log(err);
  }
  console.log("app is running on port ${process.env.port}");
});
   //if we want people of specific city handle the queries in backend// there is no need of separate route for query 