const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema{
    userName: {type: String, required: true},

}

module.exports = mongoose.model('User')