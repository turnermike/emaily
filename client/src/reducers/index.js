import { combineReducers } from 'redux';
import authReducer from './authReducer';

// object passed to this object has keys that represent the keys inside of the state object
export default combineReducers({
    auth: authReducer
});