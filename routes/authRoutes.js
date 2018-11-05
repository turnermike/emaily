const passport = require('passport');

module.exports = app => {

    // route: /auth/google
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // route: /auth/google/callback
    app.get('/auth/google/callback', passport.authenticate('google'));

    // get current user
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};
