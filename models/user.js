// models/user.js

const mongoose = require('mongoose');
const { Schema } = mongoose; // use mongo Schema object

// define db collection
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }   // populate object options
});

// create the users model class for MongoDB
mongoose.model('users', userSchema);

