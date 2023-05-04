//we are creating basic server for registration and login 
const express=require("express")
const {connection }=require("./db")
const app=express()
app.post("./register",(req,res)=>{
    //logic

})
app.post("/login",(req,res)=>{
    //logic
})    
app.listen(8000,async()=>{
    try{
        await connection 
        console.log("connctd to db")
    }catch(err){
        console.log(err)
        console.log("cannot connctd to db")

    }
    console.log("server is running on port 8000")
})