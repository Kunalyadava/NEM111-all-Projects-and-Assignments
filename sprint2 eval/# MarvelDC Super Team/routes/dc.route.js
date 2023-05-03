const express = require("express");
const fs = require("fs");

const dc = express.Router();

dc.get('/',(req,res) => {
    const {alias} = req.query;
    const data = JSON.parse(fs.readFileSync('./db.json'));
    if(alias){
        res.send(data.dc.find(el=>el.alias==alias))
    }else{
        res.send(data.dc)
    }

})

dc.post('/addnew', (req,res) => {
    const data = JSON.parse(fs.readFileSync('./db.json'));
      data.dc.push(req.body);
      fs.writeFileSync("./db.json", JSON.stringify(data), (err) => {
      res.send("New superhero has been added");
    
      });
})


dc.get("/:id", (req, res) => {
    const {id} = req.params;
    const data = JSON.parse(fs.readFileSync('./db.json'));
    let newdata = data.dc.filter((el)=>{
        return el.id === id;
    })
    res.send(newdata[0]);
})


dc.patch('/update/:id', (req,res)=>{
    const {id}= req.params;
    const data = JSON.parse(fs.readFileSync('./db.json'));
    let newdata = data.dc.map((el)=>{
        if(el.id === id){
            el.name = req.body.name;
            el.alias =req.body.alias;
            el.power_level = req.body.power_level;
            role = req.body.role;
            return el;
        }else{
            return el;
        }
    })
    data.dc = newData;
    fs.writeFileSync('./db.json', JSON.stringify(data))
    res.send("Patched Character Details");

})
module.exports = dc