import * as types from '../constants/actionTypes.js';
import { paramify } from '../utils';
 
export function updateInput(input) {
  return {
    type: types.UPDATE_INPUT,
    payload: input,
  }
}

export function updateBookList(bookList) {
  return {
    type: types.UPDATE_BOOK_LIST,
    payload: bookList,
  }
}

export function updateSearch(input) {
  return (dispatch) => {
    dispatch(updateInput(input));
    fetch(`http://openlibrary.org/search.json?title=${paramify(input)}`)
      .then(res => res.json())
      .then(response => {
        return dispatch(updateBookList(response.docs))
      })
  }
}
