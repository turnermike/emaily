// src/componenets/surveys/SurveyFormReview.js

// loaded via SurveyNew
// show survey entries for review

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';          // used to pull data from redux store
import formFields from './formFields';          // importing a constant for field names and labels
import { withRouter } from 'react-router-dom';  // we export this component by wrapping it in withRouter(), giving it access to the props needed for routes
import * as actions from '../../actions';       // importing action creators

// props passes onCancel from SurveyNew renderConent function for SurveyFormReview component
// props passes formValues from the mapStateToProps object
// props passes history via withRouter() from the component, passed to submitSurvey action creator

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {

    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );

  });


      // buttons need action creators
      // /client/src/actions/index.js
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
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>

      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className="material-icons right">email</i>
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


export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));



