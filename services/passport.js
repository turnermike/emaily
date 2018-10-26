const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');



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