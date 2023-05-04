const express = require('express');

const userRouter = express.Router()
const { UserModel } = require("../models/user.model")
const jwt = require("jsonwebtoken")

// registration
userRouter.post("/register", async (req, res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.status(200).send({ "msg": "Registration successful" })
    } catch (error) {
        res.status(400).send({ "msg": "Registration Failed", "error": error.message })
    }
})

// login route and token expires in 1h
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.find({ email, password })
        if (user.length > 0) {
            res.status(200).send({ "msg": "Login successful", "token": jwt.sign({ name: 'ritesh' }, 'hello', { expiresIn: '1h' }) })
        } else {
            res.status(200).send({ "msg": "Invalid Credentials" })
        }
    } catch (error) {
        res.status(400).send({ "msg": "Login Failed", "error": error.message })
    }
})

// get 
userRouter.get("/details", (req, res) => {
    const token = req.headers.authorization
    jwt.verify(token, 'hello', (err, decoded) => {
        if (decoded) {
            res.status(200).send({ "msg": "User Details" })
        } else {
            res.status(400).send({ "msg": err.message })
        }
    });
})



module.exports = {
    userRouter
}
