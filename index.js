const express = require('express');     // using "common js modules"
require('./services/passport.js');
// import express from 'express'           // example using ES2015 modules (node does not support)

// create app object
const app = express();

// load routes
// - routes/authRoutes.js returns a function
// - call that function with the app object by appending "(app)" to the end
require('./routes/authRoutes')(app);

// use an environment variable for the port number
const PORT = process.env.PORT || 5000;
app.listen(PORT);

