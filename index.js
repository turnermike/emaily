// root index.js
// main express configs

const express = require('express'); // using "common js modules"
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser'); // is express middleware
const keys = require('./config/keys');
require('./models/user');
require('./services/passport.js');
// import express from 'express'           // example using ES2015 modules (node does not support)

// connect to MongoDB via mongoose
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

// create app object
const app = express();

// by default express does not parse the request payload on POST/PUT/etc requests
// his will parse the post request body and make it available to the application
// route handlers.
// will assign the parsed post request body to the req.body property of the incomning
// request object.
app.use(bodyParser.json());

// instruct express to use cookies
// express middlewares are wired up using app.use
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());




// load auth routes
// order of operations is important here for these routes
// - routes/authRoutes.js returns a function
// - call that function with the app object by appending "(app)" to the end
require('./routes/authRoutes')(app);
// load billing routes
require('./routes/billingRoutes')(app);

// express production config
if (process.env.NODE_ENV === 'production') {

  // express will serve production assets, such as main.js or main.css
  // if any get request for a route cannot be found, look in client/build dir for that file
  app.use(express.static('client/build'));

  // express will serve index.html if requested route is not found
  // if  someone makes
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}

// use an environment variable for the port number
const PORT = process.env.PORT || 5000;
app.listen(PORT);
