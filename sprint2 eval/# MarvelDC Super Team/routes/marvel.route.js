const express = require("express");
const fs = require("fs");
const  validator  = require("../Middlewares/validator.middleware");

const marvelRouter = express.Router();
marvelRouter.post("/addnew", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json"));

  const newMarvel = {
    name: req.body.name,
    alias: req.body.alias,
    power_level: req.body.power_level,
    role: req.body.role,
  };

  data.marvel.push(newMarvel);

  fs.writeFileSync("./db.json", JSON.stringify(data), (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("New superhero has been added");
    }
  });
});

marvelRouter.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json"));
  res.send(JSON.stringify(data.marvel));
});

marvelRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync("./db.json"));

  const requireMarvel = data.marvel.find((marvel) => marvel.id === id);
  res.send(requireMarvel);
});

// marvelRouter.patch("/:id", validator, (req, res) => {
//   const { id } = req.params;
//   const data = JSON.parse(fs.readFileSync("../db.json"));
//   const requireMarvel = data.marvel.find((marvel) => marvel.id === id);

//   if (
//     req.body.name &&
//     !req.body.alias &&
//     !req.body.role &&
//     !req.body.power_level
//   ) {
//     requireMarvel.name = req.body.name;
//   } else if (
//     !req.body.name &&
//     req.body.alias &&
//     !req.body.role &&
//     !req.body.power_level
//   ) {
//     requireMarvel.alias = req.body.alias;
//   } else if (
//     !req.body.name &&
//     !req.body.alias &&
//     req.body.role &&
//     !req.body.power_level
//   ) {
//     requireMarvel.role = req.body.role;
//   } else if (
//     !req.body.name &&
//     !req.body.alias &&
//     !req.body.role &&
//     req.body.power_level
//   ) {
//     requireMarvel.power_level = req.body.power_level;

//     //need more else if condition for 2,3 params
//   } else {
//     requireMarvel.name = req.body.name;
//     requireMarvel.alias = req.body.alias;
//     requireMarvel.power_level = req.body.power_level;
//     requireMarvel.role = req.body.role;
//   }

//   let updatedMarvel = data.marvel.find((marvel) => marvel.id === id);
//   updatedMarvel = requireMarvel;

//   fs.writeFileSync("./db.json", JSON.stringify(data), (err) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("Patched Character Details");
//     }
//   });
// });

marvelRouter.delete("/:id", validator, (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync("./db.json"));
  const newMarvel = data.marvel.filter((marvel) => marvel.id !== id);

  data.marvel = newMarvel;
  fs.writeFile("./db.json", JSON.stringify(data), (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Deleted Character Details");
    }
  });
});

module.exports =  marvelRouter ;
