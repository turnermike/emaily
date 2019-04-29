email = 'a@a.com';
choice = 'yes' || 'no';


Survey.updateOne({
  id: surveyId,
  recipients: {
    $elemMatch: { email: email, responded: false }
  }
}, {
  $inc: { [choice]: 1 },  // $inc: increment
  $set: { 'recipients.$.responded': true }


})