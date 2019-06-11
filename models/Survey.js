// models/Survey.js
// Survey Model Class

const mongoose = require('mongoose');
const { Schema } = mongoose; // use mongo Schema object
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],  // array of RecipientSchema records (Subdocument Collection)
  fromEmail: { type: String },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  // each survey belongs to a specific user
  // underscore indicates that it's a relationship field,
  // it sets up a relationship between this model and another model
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

// create the survey model class, load into mongoose library
mongoose.model('surveys', surveySchema);