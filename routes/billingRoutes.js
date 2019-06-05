// routes/billingRoutes.js

const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

  // console.log('STRIPE_PUBLISHABLE_KEY', keys.stripePublishableKey);
  // console.log('STRIPE_SECRET_KEY', keys.stripeSecretKey);
  // console.log('REACT_APP_STRIPE_KEY', process.env.REACT_APP_STRIPE_KEY);

  // cal requireLogin before processing route
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // console.log(req.body);

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // console.log('charge', charge);

    // increment user's credits
    req.user.credits += 5;
    // async request, assign result to user var
    const user = await req.user.save();

    // return user
    res.send(user);

  });

};