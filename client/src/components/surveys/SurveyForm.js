// src/componenets/surveys/SurveyForm.js

// loaded via ServeyNew
// shows form to user to add input

import _ from 'lodash';
import React, { Component } from 'react';
// reduxForm helper allows redux-form to communicate with redux store
// Field helper for rendering any type of html form element (input, textarea, select, etc)
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';  // Link is used to route
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title', noValueError: 'You must provide a title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

// this.props.handleSubmit is provided by reduxForm helper
// arrow function is called automatically on submit
// values object stores all the form data
// the label="" prop will be automatically forwarded the custom component (SurveyField)
class SurveyForm extends Component {

  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      );
    });


  // example of using static Field components, before refactoring with array of values
  //   return (
  //     <div>
  //       <Field label="Survey Title" type="text" name="title" component={SurveyField} />
  //       <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
  //       <Field label="Email Body" type="text" name="body" component={SurveyField} />
  //       <Field label="Recipient List" type="text" name="emails" component={SurveyField} />
  //     </div>
  //   );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }

}

// validate form data via redux form
function validate(values) {

  // console.log('values', values);

  const errors = {};

  // validate email addresses
  errors.emails = validateEmails(values.emails || '');

  // checking for required fields
  _.each(FIELDS, ({ name, noValueError }) => {

    if (!values[name]) {
      // errors[name] = noValueError;
      errors[name] = 'You must provide a value';
    }

  });


  // if (!values.title) {
  //   errors.title = "You must provide a title."; // redux form will pass this prop to the field
  // }

  // if (!values.subject) {
  //   errors.subject = "You must provide a subject.";
  // }

  // if (!values.body) {
  //   errors.body = "You must provide a body."
  // }

  return errors;

}

export default reduxForm({
  validate,                 // calls validate function
  form: 'surveyForm',       // a type of namespace for redux-form to referrence this specific form, accessible in component via state.form.surveyForm
  destroyOnUnmount: false   // don't clear field values
})(SurveyForm);











