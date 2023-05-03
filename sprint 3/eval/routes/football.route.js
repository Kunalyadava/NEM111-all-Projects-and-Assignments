const { Router } = require("express");
const { Player } = require('../models/football.model')
const { validator } = require('../middlewares/validator.middleware')
const { record } = require('../middlewares/record.middleware');
const { updateLimiter } = require("../middlewares/updateLimiter.middleware");

const footballRouter = Router();


//A POST route to post the data to the database.
footballRouter.post('/add', validator, async (req, res) => {
    const payload = req.body;

    try {
        const ply = new Player(payload);
        await ply.save();
        res.status(200).send({ "message": "Player Added Successfully !!!" })
    }
    catch (err) {
        res.status(400).send({ "message": err.message })
    }
})


//A GET route to get the data of all the players.
footballRouter.get('/', async (req, res) => {
    try {
        const { goals, age, nationality } = req.query;
        let players;


        if (goals) {
            players = await Player.find({ goals: { $gt: goals } });
        } else if (age) {
            players = await Player.find({ age: { $lt: age } });

        }
        else if (nationality) {
            players = await Player.find({ nationality })
        }
        else {
            players = await Player.find()
        }

        res.json(players);
    } catch (err) {
        console.log(err.message)
        res.status(400).send('Server Error')
    }

})

//A GET route to get the details of the player with a particular id. 
footballRouter.get('/:id', async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);

        if (!player) {
            return res.status(404).json({ message: 'Player Not Found' })
        }
        res.json(player);
    } catch (err) {
        console.log(err.message);

        if (err.kind === "ObjectId") {
            return res.status(404).json({ message: 'Player Not Found' })
        }

        res.status(500).send('Server Error')
    }
})

//A GET route to get top 5 players having maximum number of goals 
footballRouter.get('/top5', async (req, res) => {
    try {
        const players = await Player.find().sort({ goals: -1 }).limit(5);
        record.json(players)
    } catch (err) {
        res.status(500).send({ error: error.message })
    }
});

//Add Filters as well:
footballRouter.get('/filter', async (req, res) => {
    try {
        const filters = {};
        if (req.query.goals) {
            filters.goals = { $gte: Number(req.query.goals) };
        }
        if (req.query.age) {
            filters.age = { $lte: Number(req.query.age) };
        }
        if (req.query.nationality) {
            filters.nationality = req.query.nationality
        }

        const players = await Player.find(filters);
        res.send(players);
    }
    catch (err) {
        res.status(500).send({ error: error.message })
    }
})

// A GET route to handle the pages and responses as well, basically apply pagination.
footballRouter.get('/page/:pageNumber', async (req, res) => {
    const page = Number(req.params.pageNumber);
    const limit = 3;
    const startIdx = (page - 1) * limit;
    const endIdx = (page * limit);


    try {
        const players = await Player.find().skip(startIdx).limit(limit);
        const totalPlayers = await Player.countDocuments();
        const totalPages = Math.ceil(totalPlayers / limit)


        const response = {
            players,
            page,
            totalPages
        }

        res.send(response)
    } catch (err) {
        res.status(500).send({ error: error.message })
    }

})

//A PATCH route to update the data of any particular player.
footballRouter.patch('/patch/:id', updateLimiter, async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        await Player.findByIdAndUpdate({ _id: id }, payload);
        res.status(200).send({ message: "Player  Updated" })

    } catch (err) {
        res.status(500).send({ error: error.message })
    }

})


//A DELETE route to delete the data of any particular player.
footballRouter.delete('/delete/:id', record, async (req, res) => {
    const { id } = req.params;
    try {
        await Player.findById({ _id: id });
        res.status(200).send({ "message": "Player deleted" })
    }

    catch (err) {
        res.status(500).send({ error: error.message })
    }
})


module.exports = {
    footballRouter
}