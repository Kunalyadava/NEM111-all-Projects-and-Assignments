//Autherisation 

//we are creating basic server for registration and login 
const express=require("express")
const {connection }=require("./db")
const {userRouter }=require("./routes/User.routes")
const jwt = require('jsonwebtoken'); //
const {auth}=require("./middleware/auth.middleware")

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
app.use(auth)
app.get("/Movies",(req,res)=>{
    // if(req.query.token==="12345R"){
    // res.send("Available Movies Data")
    // }else{
    //     res.send({"msg":"Plz login first"})
    // }
    //"12345R"
    //localhost:8000/movies?token="12345R"
    // const token=req.headers.authorization.split(" ")[1]//we are getting token from query 
    // jwt.verify(token, 'masai',(err, decoded) =>{  //err will be error while login decodeded will be our decoded token
    //     if(decoded){
            res.status(200).send("Movie Data")
    //     }else{
    //         res.status(400).send({"err":err.msg})
    //     }
    //   });
})
app.get("/Series",(req,res)=>{
  
        //while accesssing the protectected routes we need to pass it as query lke localhost:8000/movies?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VzMjM1OT
            //but it is not going to work why??because we are comparing with the hard coded token so we are using jwt and hence we have import it first
            //then go to jwt doc and see if anything is there to verify the token or not like it is there see jwt.verify(token, secretOrPublicKey, [options, callback])
            //put it above in protected page

 
    //localhost:8000/series

    // const {token}=req.query //we are getting token from query 
    // const token=req.headers.authorization.split(" ")[1]

    // jwt.verify(token, 'masai', function(err, decoded) {  //err will be error while login decodeded will be our decoded token
        // if(decoded){
            res.status(200).send("Movie Data")
    //     }else{
    //         res.status(400).send({"err":err.msg})
    //     }
    //   });
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

// JSON web token(JWT) is JSON Object which is used to ecurely transfer 
// information over the web(between two parties). It can be used for an
//  authentication system and can also be used for information exchange.
//  The token is mainly composed of header, payload, signature. These three 
//  parts are separated by dots(.). JWT defines the structure of information
//   we are sending from one party to the another, and it comes in two forms 
//   – Serialized, Deserialized. The Serialized approach is mainly used 
//   to transfer the data through the network with each request and response. 
// While the deserialized approach is used to read and write data to the web token.