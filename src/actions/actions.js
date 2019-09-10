import * as types from '../constants/actionTypes.js';
import { paramify, enqueueRequest } from '../utils';
 
export function updateInput(input) {
  return {
    type: types.UPDATE_INPUT,
    payload: input,
  }
}

export function updateBookList(bookList, currentPage) {
  return {
    type: types.UPDATE_BOOK_LIST,
    payload: bookList,
    currentPage,
  }
}

export function updateSearch(newPage) {
  return (dispatch, getState) => {
    function fetchBooks() {
      const { input } = getState();
      return fetch(`http://openlibrary.org/search.json${paramify({ input, newPage })}`)
        .then(res => {
          return res.json()
        })
        .then(response => {
          console.log(response)
          // TODO: add error handling for docs.length = 0
          if (response.numFound !== getState().bookList.total) dispatch(clearCache());
          dispatch(updateBookList(response, newPage ? newPage : 1))
        })
        .catch(err => {
          // TODO: handle empty query
          console.log(err)
        })
    }

    if (!newPage) {
      // Reduces requests by fetching only after 500ms have elapsed since last keystroke
      clearTimeout(enqueueRequest());
      enqueueRequest(setTimeout(fetchBooks, 500));
    } else if (!getState().bookList.cachedPages[newPage]) {
      fetchBooks();
    }
  }
}

// TODO: document
export function useCache(cachedPage) {
  return {
    type: types.USE_CACHE,
    cachedPage,
  }
}

export function clearCache() {
  return {
    type: types.CLEAR_CACHE,
  }
}