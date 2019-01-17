// src/componenets/surveys/SurveyForm.js

// loaded via ServeyNew
// shows form to user to add input

import React, { Component } from 'react';
// reduxForm helper allows redux-form to communicate with redux store
// Field helper for rendering any type of html form element (input, textarea, select, etc)
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {

  render() {
    return (
      <div>
        <Field
          type="text"
          name="surveyTitle"
          component="input"
        />
      </div>
    );
  }

}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);