const express = require('express');     // using "common js modules"
require('./services/passport.js');
// import express from 'express'           // example using ES2015 modules (node does not support)

// create app object
const app = express();

// use an environment variable for the port number
const PORT = process.env.PORT || 5000;
app.listen(PORT);

