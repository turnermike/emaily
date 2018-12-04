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

    // logout user
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    // get current user
    app.get('/api/current_user', (req, res) => {
        console.log('req.user', req.user);
        res.send(req.user);
        // res.send(req.session);
    });



};
