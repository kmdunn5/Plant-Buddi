const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    userName: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    plants: [{
        type: Schema.Types.ObjectId,
        ref: 'Plant'
    }]

})

module.exports = mongoose.model('User', userSchema)