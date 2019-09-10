import * as types from '../constants/actionTypes.js';

export default function(state = "", action) {
  switch(action.type) {
    case types.UPDATE_INPUT: 
      return action.payload;
    default:
      return state;
  }
}