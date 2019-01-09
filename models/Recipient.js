// models/Recipient.js
// Recipient Model Class
// Example of a Mongo Subdocument Collection
// Called from models/Survey.js

const mongoose = require('mongoose');
const { Schema } = mongoose; // use mongo Schema object

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;