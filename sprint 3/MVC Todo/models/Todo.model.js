const mongoose = require("mongoose")
const todoSchema = mongoose.Schema({
    title: String,
    completed: Boolean,
    pending: Boolean,
    focus: String
}, {
    versionKey: false
})

const TodoModel = mongoose.model("todo", todoSchema)

module.exports = {
    TodoModel
}