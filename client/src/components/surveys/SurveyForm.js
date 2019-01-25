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

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);