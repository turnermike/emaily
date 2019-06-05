# Emaily

Node with React: Fullstack Web Development
[https://www.udemy.com/node-with-react-fullstack-web-development/](https://www.udemy.com/node-with-react-fullstack-web-development/)

GitHub Repo:
[https://github.com/StephenGrider/FullstackReactCode/tree/master](https://github.com/StephenGrider/FullstackReactCode/tree/master)

Server port: 5000
Client port: 3000

Helpful Links:

* Serveo as a LocalTunnel Alternative *
LocalTunnel was used in the original tutorial as a proxy to make the local server public.
That project has since been halted and we're now using [Serveo](https://serveo.net/).
[https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/questions/4582134](https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/questions/4582134)

* ngrok as LocalTunnel Alternative *
[https://ngrok.com/download](https://ngrok.com/download)
[https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/questions/3213122](https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/questions/3213122)



# Quirks/Notes

From time to time the node process for localtunnel will not exit. Use the following to restart node:
`killall node`



# MongoDB Atlas or to connect via MongoDB Compass
Dev: `mongodb+srv://mike:NxjUgTIqbZwJsK7LIoaBs@emaily-bpjar.mongodb.net/emaily-dev?retryWrites=true`
Prod: `mongodb+srv://mike:NxjUgTIqbZwJsK7LIoaBs@emaily-bpjar.mongodb.net/emaily-prod?retryWrites=true`

### Mongo Shell
Dev: `mongo "mongodb+srv://emaily-bpjar.mongodb.net/test" --username mike`

### mLab (old)
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



# Serveo
Used for handling webhooks in our local environment. Forwards a request to one of their URLs to a localhost domain.
[https://serveo.net/](https://serveo.net/)
https://asdk3vndk34.serveo.net/api/surveys/webhooks



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
```



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

## ngrok
Using ngrok as a backup for Serveo.

Expose localhost to public url.
```
ngrok http 5000
```

## node
Kill running processes.
```
killall node
```

## Heroku
https://rocky-basin-26061.herokuapp.com

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









# General Notes

## Steps taken to display list of surveys from /api/surveys endpoint.

1. Create a Type in:
`client/src/actions/types.js`
```
export const FETCH_SURVEYS = 'fetch_surveys';
```

2. Create an Action Creator to make network request to backend. Will get list of surveys, dispatch an Action of Type 'fetch_users'. Then we need to
create a new Reducer to catch the data being catptured by that request.
`clients/src/actions/index.js`
```
export const fetchSurveys = () => async dispatch => {     // no arguments requried, simple get, returns async function

  const res = await axios.get('/api/surveys');            // get surveys from backend

  dispatch({ type: FETCH_SURVEYS, payload: res.data });   // dispatch the action

};
```

3. Create a Reducer to watch for a Type of FETCH_SURVEYS and return list of surveys.
Create new file `clients/src/reducers/surveysReducer.js`
```
import { FETCH_SURVEYS } from '../actions/types';   // file exports various Types, using curly brackets to specify which Type

export default function(state = [], action) {       // state = [], by default this reducer will return an empty array (app boots up)
    // console.log('action', action);
    switch(action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}
```

4. Wiring the Reducer up to the combineReducers call in:
`clients/src/reducers/index.js`
```

```
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from '/.surveysReducer';                  // NEW LINE

// object passed to this object has keys that represent the keys inside of the state object
export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer                                     // NEW LINE
});
```




