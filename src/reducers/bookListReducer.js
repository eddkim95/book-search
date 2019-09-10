import * as types from '../constants/actionTypes.js';

export default function(prevState = [], action) {
  switch(action.type) {
    case types.UPDATE_BOOK_LIST: 
      return action.payload;
    default:
      return prevState;
  }
}