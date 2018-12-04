import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    // console.log('action', action);
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false; // action.payload returns an object or empty string
        default:
            return state;
    }
}