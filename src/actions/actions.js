import * as types from '../constants/actionTypes.js';
import { paramify, enqueueRequest } from '../utils';
 
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

export function updateSearch() {
  return (dispatch, getState) => {
    function getBooks() {
      fetch(`http://openlibrary.org/search.json${paramify(getState().input)}`)
        .then(res => {
          console.log(res.status)
          return res.json()
        })
        .then(response => {
          console.log(response)
          return dispatch(updateBookList(response.docs))
        })
        .catch(err => {
          console.log(err)
        })
    }
    // Reduces requests by fetching only after 500ms have elapsed since last keystroke
    clearTimeout(enqueueRequest());
    enqueueRequest(setTimeout(getBooks, 500));
  }
}
