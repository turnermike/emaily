const passport = require('passport');

// route: /auth/google
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// route: /auth/google/callback
app.get('/auth/google/callback', passport.authenticate('google'));
