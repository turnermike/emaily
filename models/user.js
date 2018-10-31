const mongoose = require('mongoose');
const { Schema } = mongoose; // use mongo Schema object

// define db collection
const userSchema = new Schema({
    googleId: String
});

// create the users model class for MongoDB
mongoose.model('users', userSchema);

