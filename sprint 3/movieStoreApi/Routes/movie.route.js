const { Router } = require("express")
const { MovieModel } = require("../Models/movie.model")

const movieRouter = Router();

//GET MOVIE DATA
movieRouter.get("/getmovie", async (req, res) => {
    const { title, sort, page } = req.query
    // console.log(query);
    let val = sort == "asc" ? 1 : -1;
    let limit = 3
    let skip = (+page - 1) * limit
    try {
        const users = await MovieModel.find({ title: { $regex: title, $options: "i" } }).sort({ title: val }).skip(skip).limit(limit)
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})

// POST MOVIE DATA
movieRouter.post("/postmovie", async (req, res) => {
    const payload = req.body;
    try {
        const user = new MovieModel(payload);
        await user.save();
        res.status(200).send({ "msg": "New movie added" })
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})

// DELETE MOVIE DATA
movieRouter.delete("/deletemovie/:movieID", async (req, res) => {
    const { movieID } = req.params
    try {
        await MovieModel.findByIdAndDelete({ _id: movieID })
        res.status(200).send({ "msg": "Movie deleted" })
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})


// UPDATE MOVIE DATA
movieRouter.patch("/patchmovie/:movieID", async (req, res) => {
    const { movieID } = req.params;
    const payload = req.body;
    try {
        await MovieModel.findByIdAndUpdate({ _id: movieID }, payload)
        res.status(200).send({ "msg": "Movie updated" })
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})


module.exports = {
    movieRouter
}