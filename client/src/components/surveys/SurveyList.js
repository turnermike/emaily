import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSurveys } from '../../actions';
// import ResultsChart from './ResultsChart';
import Chart from "react-google-charts";


class SurveyList extends Component {

  componentDidMount() {

    this.props.fetchSurveys();

  }

  renderSurveys() {

    return this.props.surveys.reverse().map((survey, index) => {

      // const barGraphData = [
      //   ['User Selection', 'Count', { role: 'style'}],
      //   ['Yes', survey.yes, 'color: lightgreen'],
      //   ['No', survey.no, 'color: lightblue']
      // ];

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
            <p className="right">
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

            <Link to="/surveys/delete" className="btn-floating btn-large red">
              <i className="material-icons">delete</i>
            </Link>

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