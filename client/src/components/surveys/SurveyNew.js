// src/componenets/surveys/SurveyNew.js

// top level survey component responsible for showing SurveyForm and SurveyReview components

import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {

  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }

}

export default SurveyNew;