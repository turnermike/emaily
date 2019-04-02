# Emaily

Node with React: Fullstack Web Development
[https://www.udemy.com/node-with-react-fullstack-web-development/](https://www.udemy.com/node-with-react-fullstack-web-development/)

GitHub Repo:
[https://github.com/StephenGrider/FullstackReactCode/tree/master](https://github.com/StephenGrider/FullstackReactCode/tree/master)

Server port: 5000
Client port: 3000




# Atlas

Dev: `mongodb+srv://mike:NxjUgTIqbZwJsK7LIoaBs@emaily-bpjar.mongodb.net/emaily-dev?retryWrites=true`
Prod: `mongodb+srv://mike:NxjUgTIqbZwJsK7LIoaBs@emaily-bpjar.mongodb.net/emaily-prod?retryWrites=true`




# mLab
Durring the second last section of the tutorial mLabs was aquired by MongoDB Atlas. Now using Altas, this is here for record keeping.

Started tutorial using [mlab](https://mlab.com/home) for remote MongoDB hosting. Since then, Atlas had aquired mlab, now using Atlas.

Dev: `mongodb://mike:password1@ds147233.mlab.com:47233/emaily-dev`
```
Database: emaily-dev
User: mike
Password: password1
```

Prod: `mongodb://mikeprod:password1@ds155073.mlab.com:55073/emaily-prod416`
```
Host: ds155073.mlab.com
Port: 55073
Database: emaily-prod416
User: mikeprod
Password: password1
```




# Stripe
Test Card: 4242 4242 4242 4242




# Sendgrid
Using Sendgrid NPM package for sending email:
[https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail](https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail)

# Local Tunnel
Used for handling webhooks in our local environment. Forwards a request to one of their URLs to a localhost domain.
[https://localtunnel.github.io/www/](https://localtunnel.github.io/www/)



# NPM Modules Used
- passport.js
    - including a passport strategy for Goolge OAuth
```
npm install --save passport passport-google-oauth20
```

- mongoose.js
    - used as a helper for MongoDB
```
npm install --save mongoose
```

- create-react-app
```
sudo npm install -g create-react-app
```

- redux-form
```
npm install --save redux-form





# Naming Conventions

## Files
If the file exports a function we use a lowercase letter for the first character.
If the file exports a class we use a capital letter for the first character.





# Routes Available

## Auth Routes
GET /Auth/google                        - login via Google OAUTH via passport.js
GET /auth/google/callback               - callback required by passport.js auth flow, passport.js middleware handles auth
GET /api/logout                         - logout, destroy session
GET /api/current_user                   - returns the user model

## Billing Routes
POST /api/stripe                        - process stripe payment, uses requireLogin middleware

## Survey Routes
GET /api/surveys                        - return a list of surveys user created
POST /api/surveys/webhooks              - receive feedback from a user who clicked a link in the email
POST /api/surveys                       - create a new survey (requires 4 properties)
POST /api/surveys/:surveyId/:choice     - used by Sendgrid webhook for survey click selection

GET /surveys                            - list surveys
GET /surveys/new                        - form to create a new survey



# CLI Commands

## Nodemon
Run node and auto refresh on save.
```
npm run dev
```

## Heroku

Login
```heroku login```

Create new app
```heroku create```
Will return web URL and git remote URL for deployments.

Push a deployment
```git push heroku master```

Open app in a browser
```heroku open```

Open logs
```heroku logs```

SSH into server
```heroku run bash```

Restart server
```heroku restart```







# Production Deployments

## Build Production Assets
Use create-create-app's build.
```
cd client
npm run build
```













