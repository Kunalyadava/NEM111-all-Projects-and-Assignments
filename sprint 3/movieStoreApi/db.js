const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

//connection
const connection = mongoose.connect(
    "mongodb+srv://movies:movies@cluster0.4slmkea.mongodb.net/movie?retryWrites=true&w=majority",
);

// structure of data
const movieSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        genre: { type: String, required: true },
        director: { type: String, required: true },
        rating: { type: Number, required: true }
    }, {
    versionKey: false,
});


// constructor function
const MovieModel = mongoose.model("movie", movieSchema);
module.exports = {
    connection,
    MovieModel
};