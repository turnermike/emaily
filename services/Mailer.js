// services/Mailer.js

// sendgrid npm package:
// https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail


const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {

  // constructor is called automatically when using the 'new' keyword when calling class
  constructor({ subject, recipients, fromEmail }, content) {

    // used to call functions on an object's parent
    // no arguments provided, so this will call the constructor for helper.Mail
    super();

    // define properties
    this.sgApi = sendgrid(keys.sendGridKey);
    // this.from_email = new helper.Email('no-reply@emaily.com');
    this.from_email = new helper.Email(fromEmail);
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);


    this.addContent(this.body); // register body property with Mail class
    this.addClickTracking();    // helper to add click tracking
    this.addRecipients();       // helper to add the recipients

  }

  formatAddresses(recipients) {

    return recipients.map(({ email }) => {

      // use sendgrid's Email helper
      return new helper.Email(email); // creates a helper object

    });

  }

  addClickTracking() {

    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);

  }

  addRecipients() {

    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });

    this.addPersonalization(personalize);

  }

  // send it
  async send() {

    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    const response = await this.sgApi.API(request);

    return response;

  }

}

module.exports = Mailer;