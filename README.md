# Emaily

Node with React: Fullstack Web Development
[https://www.udemy.com/node-with-react-fullstack-web-development/](https://www.udemy.com/node-with-react-fullstack-web-development/)


# mLab
Using [mlab](https://mlab.com/home) for remote MongoDB hosting.

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
User: mike-prod
Password: password1
```
# Stripe
Test Card: 4242 4242 4242 4242


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




# Naming Conventions

## Files
If the file exports a function we use a lowercase letter for the first character.
If the file exports a class we use a capital letter for the first character.




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

