// src/componenets/surveys/SurveyFormReview.js

// loaded via SurveyNew
// show survey entries for review

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';    // used to pull data from redux store
import formFields from './formFields';    // importing a constant for field names and labels

// props passes onCancel from SurveyNew renderConent function for SurveyFormReview component
// props passes formValues from the mapStateToProps object

const SurveyFormReview = ({ onCancel, formValues }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {

    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );

  });



  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
{/*      <div>
        <div>
          <label>Survey Title</label>
          <div>{formValues.title}</div>
        </div>
        <div>
          <label>Subject Line</label>
          <div>{formValues.subject}</div>
        </div>
        <div>
          <label>Email Body</label>
          <div>{formValues.body}</div>
        </div>
      </div>
*/}
      <button
        className="yellow darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  );
};



function mapStateToProps(state) {

  // console.log(state.form.surveyForm.values);

  return {
    formValues: state.form.surveyForm.values
  };

}


export default connect(mapStateToProps)(SurveyFormReview);