const express = require('express');     // using "common js modules"
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// client id: 508753040406-jb4k1tra31mb17kmfkr93k94olm9ogl2.apps.googleusercontent.com
// client secret: 5dcxk-LjqPzYmzUAxGfuKEbz

// import express from 'express'           // using ES2015 modules (node does not support)

const app = express();                  // create app object

passport.use(new GoogleStrategy());     // register the strategy with passport



// route handler for get requests to '/'
// req = request
// res = response
// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy' });
// });

// instruct node to listen on port
// app.listen(5000);

// use an environment variable for the port number
const PORT = process.env.PORT || 5000;
app.listen(PORT);

