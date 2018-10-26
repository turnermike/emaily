const express = require('express');     // using "common js modules"
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

// import express from 'express'           // example using ES2015 modules (node does not support)

// create app object
const app = express();

// register the strategy with passport
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        // accessToken returned from google
        console.log('accessToken', accessToken);
        console.log('refreshToken',refreshToken);
        console.log('profile', profile);
        console.log('done', done);
    })
);

// route: /auth/google
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// route: /auth/google/callback
app.get('/auth/google/callback', passport.authenticate('google'));


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

