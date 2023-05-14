
const express = require("express");
const fs = require("fs");
// const fs=require('fs');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.end("Hello")
})
 app.get ("/getuser", (req,res)=>{
        // 1. Read the complete db.json file
        const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
        res.send(data.getuser)
})
app.post("/adduser",(req,res)=>{
    // 1. Read the complete db.json file
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.postusername.push(req.body)
    //  console.log(data)
    //  3. write the complete data into db.json
    fs.writeFileSync("./db.json", JSON.stringify(data)) 
    res.send("New user added to db")
})


app.listen(4500,()=>{
    console.log("app listening on port 4500");
})