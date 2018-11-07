# Emaily

Node with React: Fullstack Web Development
[https://www.udemy.com/node-with-react-fullstack-web-development/](https://www.udemy.com/node-with-react-fullstack-web-development/)


# mLab
Using [mlab](https://mlab.com/home) for remote MongoDB hosting.

Database: emaily-dev
User: mike
Password: password


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

