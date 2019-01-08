const passport = require('passport');

// arrow function using express 'app' object
// called via root index.js
module.exports = app => {

    // route: /auth/google
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // route: /auth/google/callback
    app.get(
        '/auth/google/callback',                // returning from passport.js oauth flow
        passport.authenticate('google'),        // passport.js middleware handles auth
        (req, res) => {
            res.redirect('/surveys');           // use the response to redirect to route
        }
    );

    // logout user
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    // get current user
    app.get('/api/current_user', (req, res) => {
        console.log('req.user', req.user);
        res.send(req.user);
    });



};
