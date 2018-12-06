// fetchUser Action Creator using redux-thunk (AC returns an Action)
// makes request to backend API to communicate with auth Reducer
// to determin if user is logged in

import axios from 'axios'; // for ajax requests
import { FETCH_USER } from './types';

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
const fetchUser = () => async dispatch => {
    const res await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}
