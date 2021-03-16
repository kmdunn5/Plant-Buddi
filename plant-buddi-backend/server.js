///////////////////////////
////    Requirements   ////
///////////////////////////
const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config()


///////////////////////////
////     Constants     ////
///////////////////////////
const APP = express();
const PORT = process.env.PORT;
const DBNAME = 'plants';
// const isAuthenticated = (req, res, next) => {
//     if (req.session.currentUser) {
//       return next()
//     } else {
//       res.redirect('/sessions/new')
//     }
//   }


///////////////////////////
//  Mongoose Connection  //
///////////////////////////
mongoose.connect(process.env.MONGODBURI + DBNAME, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongeese');
});


///////////////////////////
///  Controller Config  ///
///////////////////////////
const plantsController = require('./controllers/plants');
const usersController = require('./controllers/users');
const sessionsController = require('./controllers/sessions');


///////////////////////////
//  Cors Port Allowance  //
///////////////////////////
const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('not allowed'))
        }
    }
}

APP.use(cors(corsOptions))


///////////////////////////
////    Middleware     ////
///////////////////////////
APP.use(
    session({
      secret: process.env.SECRET,
      resave: false, 
      saveUninitialized: false
    })
)

APP.use(express.json());
APP.use('/plants', plantsController);
APP.use('/users', usersController);
APP.use('sessions', sessionsController);


///////////////////////////
////       Routes      ////
///////////////////////////

APP.listen(PORT, () => {
    console.log(`Listening on port: ${PORT} with Kae, Brittani, and Ken`);
});
