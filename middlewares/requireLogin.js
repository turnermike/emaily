// middlewares/requireLogin.js
// a middleware takes an incomming request and has the ability to modify it
// "next" passes the request to the next middleware in the chain
module.exports = (req, res, next) => {

  if(!req.user){
    return res.status(401).send({ error: 'You must log in!' });
  }

  // all good, continue with request handler
  next();


};