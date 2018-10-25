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
    }, (accessToken) => {
        console.log('accessToken', accessToken);
    })
);

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);


// https://accounts.google.com/o/oauth2/v2/auth?
// response_type=code&
// redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&
// scope=profile%20email&
// client_id=508753040406-jb4k1tra31mb17kmfkr93k94olm9ogl2.apps.googleusercontent.com

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

