const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connection = mongoose.connect("mongodb+srv://todo:todo@cluster0.4slmkea.mongodb.net/todoData?retryWrites=true&w=majority")

module.exports = {
    connection
}

