// src/componenets/surveys/SurveyDelete.js


import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// import { withRouter } from 'react-router-dom';
// import SurveyForm from './SurveyForm';
// import SurveyFormReview from './SurveyFormReview';

class SurveyDelete extends Component {

  // assign state without create-react-app

  // constructor(props) {
  //   super(props);

  //   this.state = { new: true };
  // }

  // create-react-app has a babel plugin to initialize state with less code
  // same as constructor above
  // state = { showFormReview: false };

  renderContent() {

    return(
      <div>
        Are you sure you want to delete?
      </div>
    );
    // // decide which component to display based on state.showFormReview value
    // if(this.state.showFormReview === true) {

    //   return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;

    // }

    // // callback added to SurveyForm show SurveyFormReview
    // return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;

  }

  render() {
    return (
      <div>
      Hello
        {this.renderContent()}
      </div>
    );
  }

}

export default SurveyDelete;

// export default withRouter(reduxForm({
//   form: 'surveyForm'
// })(SurveyDelete));



