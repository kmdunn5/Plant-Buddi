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


module.exports = USERS
