const express=require("express")
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.end("hello")
})
app.post("adddata",(req,res)=>{
    console.log(req.body)
    res.send("data is added")
})
// app.listen(8000)

//npm i -y
//npm i nodemon express

//in case of http we used to write logic with conditional statements and 
//it looks bad but here express will take care of everything
    //in terms of conditional statements express is saying  conditional stats are already rthere
//when request is of get type send this response  res.end("Home page")
// end==send

// const express=require("express")
// const app =express()


// app.get("/",(req,res)=>{
//     res.end("Home page")

// })
// app.get("/reports",(req,res)=>{
//     res.end("Reports Page")
// })

app.listen(8080,()=>{
    console.log("App running in the port 8080")
})
