import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchSurveys, deleteSurvey } from '../../actions';
import Chart from "react-google-charts";


class SurveyList extends Component {

  componentDidMount() {

    this.props.fetchSurveys();

  }

  onDeleteClick(surveyId) {

    console.log('onDeleteClick', surveyId);

    let confirmed  = window.confirm("Are you sure you want to delete this survey?");
    console.log('confirmed', confirmed);

    if ( confirmed ) {
      this.props.deleteSurvey(surveyId);
      this.props.fetchSurveys();
    } else {
      this.props.fetchSurveys();
    }

  }

  renderSurveys() {

    return this.props.surveys.reverse().map((survey, index) => {
    // return this.props.surveys.map((survey, index) => {

      const barGraphData = [
        ['User Selection', 'Count', { role: 'style' }],
        ['Yes', survey.yes, '#4CAF50'],
        ['No', survey.no, '#F44336']
      ];

      return (
        <div className="card darken-1" key={index}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p>
              ID: {survey._id}
            </p>
            <p>
              From Email: {survey.fromEmail}
            </p>
            <p>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>

            <Chart
              chartType="BarChart"
              width="100%"
              height="300px"
              loader={<div>Loading Chart</div>}
              options={{
                title: 'Survey Results',
                legend: { position: 'none' },
                hAxis: {
                  title: 'Count',
                  minValue: 0,
                  titleTextStyle: { color: '#9E9E9E'}
                },
                vAxis: {
                  title: 'User Selection',
                  titleTextStyle: { color: '#9E9E9E' }
                }
              }}
              data={barGraphData}
            />

          </div>
          <div className="card-action">

            <Link to="/surveys" onClick={this.onDeleteClick.bind(this, survey._id)} className="btn-floating btn-large red">
              <i className="material-icons">delete</i>
            </Link>


{/*            <Link to="/surveys/delete" onClick={this.onDeleteClick.bind(this, survey._id)} className="btn-floating btn-large red">
              <i className="material-icons">delete</i>
            </Link>
*/}

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

export default withRouter(connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList));