// validator: This will validate the data while posting, it will validate that all the fields of the documents are present or not. If not present then it should send the following response.

const validator = (req, res, next) => {
    const { player_name, position, team, goals, assists, nationality, age, mutable } = req.body;

    if (!player_name || !position || !team || !goals || !assists || !nationality || !age || !mutable) {

        res.status(400).send({ "err": "Few fields are missing, cannot process the request" });
    }

    if (age < 40 || age > 40) {
        return res.status(400).json({
            err: "You are not eligible to play"
        })
    }

    if (position !== "Forward" && position !== "Midfielder" && position !== "Defender" && position !== "Goalkeeper") {
        return res.status(400).json({
            err: "Incorrect details"
        })
    }

    if (goals < 50 || assists < 20) {
        return res.status(400).json({
            err: "You are not eligible to play"
        })
    }

    next();

}


module.exports = {
    validator
}