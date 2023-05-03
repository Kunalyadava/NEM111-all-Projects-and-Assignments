const express = require("express");
const app = express();
const  marvelRouter  = require("./routes/marvel.route");
const  dcRouter  = require("./routes/dc.route");
const  logger  = require("./Middlewares/logger.middleware");

app.use(express.json());

app.get("/", (req, res) => {
//   res.setHeader("Content-Type", "text/html");
  res
    .status(200)
    .send(
      `<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>`
    );
});

app.use(logger);
app.use("/marvel", marvelRouter);
app.use("/dc", dcRouter);

// app.listen(3030,()=>{
//     console.log("port 3030")
// })

module.exports = app;
