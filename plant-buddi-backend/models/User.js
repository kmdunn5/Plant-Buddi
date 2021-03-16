const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    userName: {type: String, required: true},
    plants: [{
        type: Schema.Types.ObjectId,
        ref: 'Plant'
    }]

})

module.exports = mongoose.model('User', userSchema)