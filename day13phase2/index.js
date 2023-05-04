//Autherisation 

//we are creating basic server for registration and login 
const express=require("express")
const {connection }=require("./db")
const {userRouter }=require("./routes/User.routes")
const app=express()

app.use(express.json())
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Home page")
})
app.get("/Contacts",(req,res)=>{
    res.send("Contacts page Data")
})
app.get("/About",(req,res)=>{
    res.send("About page Data")
})
//Protected
app.get("/Movies",(req,res)=>{
    if(req.query.token==="12345R"){
    res.send("Available Movies Data")
    }else{
        res.send({"msg":"Plz login first"})
    }
    //"12345R"
    //localhost:8000/movies?token="12345R"
})
app.get("/Series",(req,res)=>{
    if(req.query.token==="12345R"){
        res.send("Available Series Data")
        }else{
            res.send({"msg":"Plz login first"})
        }
        
    //localhost:8000/series
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