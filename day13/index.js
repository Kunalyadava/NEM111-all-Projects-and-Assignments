//Autherisation 

//we are creating basic server for registration and login 
const express=require("express")
const {connection }=require("./db")
const {userRouter }=require("./routes/User.routes")
const app=express()

app.use(express.json())
app.use("/users",userRouter)
//get the idea of how to go to
// flow of everything,how to build everything in a flow
//create a simple server then connect it to db then create the schema and
// write the logic in the end now follow MVC model
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