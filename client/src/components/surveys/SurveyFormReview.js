// src/componenets/surveys/SurveyFormReview.js

// loaded via SurveyNew
// show survey entries for review

import React from 'react';
import { connect } from 'react-redux';  // used to pull data from redux store

// props passes onCancel from SurveyNew renderConent function for SurveyFormReview component

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
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
    { formValues: state.form.surveyForm.values };

  };

}


export default connect(mapStateToProps)(SurveyFormReview);