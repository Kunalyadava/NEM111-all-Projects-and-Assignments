const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    player_name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        enum: ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'],
        required: true
    },
    team: {
        type: String,
        required: true
    },
    goals: {
        type: Number,
        required: true,
        min: 0
    },
    assists: {
        type: Number,
        required: true,
        min: 0
    },
    nationality: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 40
    },
    mutable: {
        type: Boolean,
        default: true
    }
},
    {
        versionKey: false
    })



const Player = mongoose.model('Player', playerSchema);

module.exports = {
    Player
};