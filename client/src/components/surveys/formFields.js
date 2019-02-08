// src/componenets/surveys/formFields.js
// lower case file name = not exporting a component or class
// used to dynamically populate form fields, validate, and review

export default [
  { label: 'Survey Title', name: 'title', noValueError: 'You must provide a title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'recipients' }
];
