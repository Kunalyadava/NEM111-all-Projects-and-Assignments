const validator = (req, res, next) => {
    const role = req.query.role;
    const password = req.query.password;

    if ((role == "leader") && password == "4534") {
        next();
    } else {
        res.send({ "message": "You are not authorised to do this operation" });
    }
}

module.exports = validator;







