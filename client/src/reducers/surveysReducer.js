// produces this.props.surveys


import { FETCH_SURVEYS, DELETE_SURVEY } from '../actions/types';   // file exports various Types, using curly brackets to specify which Type

export default function(state = [], action) {       // state = [], by default this reducer will return an empty array (app boots up)
    // console.log('action', action);
    switch(action.type) {
        case FETCH_SURVEYS:
          return action.payload;
        case DELETE_SURVEY:
          return action.payload;
        default:
          return state;
    }
}

