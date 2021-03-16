///////////////////////////
////    Requirements   ////
///////////////////////////
const bcrypt = require('bcrypt');
const express = require('express');
const SESSIONS = express.Router();
const User = require('../models/User');

///////////////////////////
////       Routes      ////
///////////////////////////
SESSIONS.post('/', (req, res) => {
    User.findOne({ username: req.body.username}, (err, foundUser) => {
        if (err) {
            res.status(400).json({error: err.message})
        } else if (!foundUser) {
            res.status(400).json({ user: '' })
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
            } else {
                res.status(200).json(foundUser)
            }
        }
    })
})

module.exports = SESSIONS