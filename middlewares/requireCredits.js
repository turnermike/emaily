// middlewares/requireCredits.js

// confirm the user has enough credits to create a survey

// a middleware takes an incomming request and has the ability to modify it
// "next" passes the request to the next middleware in the chain

module.exports = (req, res, next) => {

  if(req.user.credits < 1){
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  // all good, continue with request handler
  next();


};