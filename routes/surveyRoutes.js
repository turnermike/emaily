// routes/surveyRoutes.js

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {

  app.get('/api/thanks', (req, res) => {
  // app.get('/api/surveys/thanks', (req, res) => {

    res.send('Thanks for voting!');

  })

  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body);
    res.send({});
  });

  // create a new survey email and send it
  // using two middlewares to require login and that user has credits available
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

    // retrieve the following properties from the req.body object and save in a variable wwith it's own name
    const { title, subject, body, recipients } = req.body;

    // new instance of a survey (lowercase variable name)
    const survey = new Survey({
      title,
      subject,
      body,

      // explaination of following line:
      // recipients.split(',')                        - returns an array of email address strings,
      // .map(email => { return { email: email }}     - for every email address return an object with the property email, to point to the email

      // before refactor
      recipients: recipients.split(',').map(email => { return { email: email.trim() }}),

      // after es6 refactor
      // key and value for the return object are the same ('email: email') which can be condensed to just 'email'
      // if body of the arrow function consists of a single expression, we can ommit the return keyword and outside curly braces
      // recipients: recipients.split(',').map(email => ({ email })),

      _user: req.user.id,
      dateSent: Date.now()

    });

    // init mailer
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      // send email
      await mailer.send();
      // save the Survey model
      await survey.save();                  // .save() is mongoose
      // charge the user 1 credit
      req.user.credits -= 1;
      // save the update to user model andstore new user model to variable
      const user = await req.user.save();

      // send back with new user
      res.send(user);

    } catch (err) {

      res.status(422).send(err);

    }


  });


};
