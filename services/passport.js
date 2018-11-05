const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');                       // import users model class

// serialize the user
passport.serializeUser((user, done) => {
    done(null, user.id);    // id generated by MongoDB
});

// deserialize the user
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

// register the strategy with passport
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        // accessToken returned from google
        // console.log('accessToken', accessToken);
        // console.log('refreshToken',refreshToken);
        // console.log('profile', profile);
        // console.log('done', done);

        // check for an existing user via Mongoose .findOne
        // uses a promise (.then()) to handle the ajax response
        User.findOne({ googleId: profile.id }).then((existingUser) => {
            if (existingUser) {
                // we already have a record with that googleId
                done(null, existingUser);
            } else {
                // we don't have a record for that user, make one
                new User({ googleId: profile.id })      // creates a Mongoose modle instance (represents a single record)
                    .save()                             // save the instance to MongoDB
                    .then(user => done(null, user));    // callback, use Passport done
            }
        });





    })
);