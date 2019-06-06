import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import ResultsChart from './ResultsChart';


class SurveyList extends Component {

  componentDidMount() {

    this.props.fetchSurveys();

  }

  renderSurveys() {

    return this.props.surveys.reverse().map((survey, index) => {

      return (
        <div className="card darken-1" key={index}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
              <br /><br />
              {survey._id}
              <br /><br />
              {index}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <span>Yes: {survey.yes}</span>&nbsp;|&nbsp;
            <span>No: {survey.no}</span>
            <br />
            <ResultsChart />
          </div>
        </div>
      );
    });

  }

  render() {

    return(
      <div>
      {this.renderSurveys()}
      </div>
    );

  }

}

function mapStateToProps({ surveys }) {

  return { surveys };

}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);