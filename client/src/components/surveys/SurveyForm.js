// src/componenets/surveys/SurveyForm.js

// loaded via ServeyNew
// shows form to user to add input

import React, { Component } from 'react';
// reduxForm helper allows redux-form to communicate with redux store
// Field helper for rendering any type of html form element (input, textarea, select, etc)
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';


// this.props.handleSubmit is provided by reduxForm helper
// arrow function is called automatically on submit
// values object stores all the form data
class SurveyForm extends Component {

  renderFields() {
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);