const mongoose = require('mongoose');
const Schema = mongoose.Schema

const plantSchema = Schema({
    commonName: {type: String, required: true},
    nickName: String,
    scientificName: {type: String, required: true},
    image: {type: String, required: true},
    lastWatered: {type: String, required: true, default: 'Not Watered Yet'},
    howOftenToWater: {type: String, default:''},
    lastFertilized: {type: String, default:''},
    lightingRequirements: {type: String, default:''},
    notes: {type: String, default: ''},
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Plant', plantSchema)