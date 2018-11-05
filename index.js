const express = require('express');     // using "common js modules"
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport.js');
// import express from 'express'           // example using ES2015 modules (node does not support)

// connect to MongoDB via mongoose
mongoose.connect(keys.mongoURI);

// create app object
const app = express();

// load routes
// - routes/authRoutes.js returns a function
// - call that function with the app object by appending "(app)" to the end
require('./routes/authRoutes')(app);

// use an environment variable for the port number
const PORT = process.env.PORT || 5000;
app.listen(PORT);

