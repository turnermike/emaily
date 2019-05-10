import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

// object passed to this object has keys that represent the keys inside of the state object
export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer
});