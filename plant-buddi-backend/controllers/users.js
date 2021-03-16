///////////////////////////
////    Requirements   ////
///////////////////////////
const bcrypt = require('bcrypt');
const express = require('express');
const USERS = express.Router();
const User = require('../models/User');

///////////////////////////
////       Routes      ////
///////////////////////////
USERS.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
      if (err) {
          res.status(400).json({error: err.message})
      }
      res.status(200).json(createdUser)
    })
})

module.exports = USERS
