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


module.exports = SESSIONS