// routes/surveyRoutes.js

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {

  // create a new survey
  // using two middlewares to require login and that user has credits available
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

    // retrieve the following properties from the req.body object and save in a variable wwith it's own name
    const { title, subject, body, recipients } = req.body;

    // new instance of a survey (lowercase variable name)
    const survey = new Survey({
      title,
      subject,
      body,

      // recipients.split(',')                        - returns an array of email address strings,
      // .map(email => { return { email: email }}     - for every email address return an object with the property email, to point to the email

      // before refactor
      recipients: recipients.split(',').map(email => { return { email: email.trim() }});

      // after es6 refactor
      // key and value for the return object are the same ('email: email') which can be condensed to just 'email'
      // if body of the arrow function consists of a single expression, we can ommit the return keyword and outside curly braces
      // recipients: recipients.split(',').map(email => ({ email })),
      _user: req.user.id,
      dateSent: Date.now()

    });

  });

};
