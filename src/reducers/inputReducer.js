import * as types from '../constants/actionTypes.js';

export default function(prevState = "", action) {
  switch(action.type) {
    case types.UPDATE_INPUT: 
      return action.payload;
    default:
      return prevState;
  }
}