// Action Creators
// makes request to backend API to communicate with auth Reducer

import axios from 'axios'; // for ajax requests
import { FETCH_USER, FETCH_SURVEYS } from './types';

// const fetchUser = () => {
//     return function(dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res }));
//     }
// };

// action creator
// same fetchUser function as above, only refactored
// curly braces not required for a single statement
export const fetchUser = () => async dispatch => {
    // make request to server which returns a response
    const res = await axios.get('/api/current_user');
    // what type of action are we going to dispatch
    dispatch({ type: FETCH_USER, payload: res.data });
}

// handle response from stripe
export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  // update value in reducer
  dispatch({ type: FETCH_USER, payload: res.data });
};

// submit a new survey for creation
export const submitSurvey = (values, history) => async dispatch => {

  // post form data to api
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');

  // dipatch the action
  dispatch({ type: FETCH_USER, payload: res.data });

};

// retrieve list of surveys
export const fetchSurveys = () => async dispatch => {     // no arguments requried, simple get, returns async function

  console.log('action creator: fetchSurveys');

  const res = await axios.get('/api/surveys');            // get surveys from backend

  dispatch({ type: FETCH_SURVEYS, payload: res.data });   // dispatch the action

};




export const deleteSurvey = (surveyId) => async dispatch => {

  console.log('action creator: deleteSurvey', surveyId);

  // const res = await axios.post(`/api/surveys/delete/${surveyId}`);
  await axios.post(`/api/surveys/delete/${surveyId}`);

}











