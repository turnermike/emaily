const express = require('express');     // using "common js modules"
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport.js');
// import express from 'express'           // example using ES2015 modules (node does not support)

// connect to MongoDB via mongoose
mongoose.connect(keys.mongoURI);

// create app object
const app = express();

// instruct express to use cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,   // 30 days
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// load routes
// - routes/authRoutes.js returns a function
// - call that function with the app object by appending "(app)" to the end
require('./routes/authRoutes')(app);

// use an environment variable for the port number
const PORT = process.env.PORT || 5000;
app.listen(PORT);

