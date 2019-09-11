import * as types from '../constants/actionTypes.js';
import { paramify, enqueueRequest } from '../utils';
 
export function updateInput(input) {
  let trimmedString = input.trim()
  return {
    type: types.UPDATE_INPUT,
    payload: trimmedString,
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
    dispatch(loading(true));
    const { input } = getState();
    const fetchURL = `http://openlibrary.org/search.json${paramify({ input, newPage })}`;
    const fetchBooks = () => {
      return fetch(fetchURL)
        .then(res => {
          // Open Library API returns status code 200 for empty responses, not 400
          // Error handling done on frontend based on empty response + non-empty query
          if (res.status == 500) throw new Error(`STATUS CODE ${res.status}`);
          return res.json();
        })
        .then(fetchedBooks => {
          // Clear cache with new query
          if (fetchedBooks.numFound !== getState().bookList.total) dispatch(clearCache());
          dispatch(updateBookList(fetchedBooks, newPage ? newPage : 1));
          dispatch(loading(false));
        })
        .catch(err => {
          console.error('Error:', err.message);
          alert('Please try another query.');
        })
    }
    // newPage argument undefined for initial query, otherwise fetch new page or set/retrieve paginated response from cache
    if (!newPage) {
      // Reduces requests by fetching only after 250ms have elapsed since last keystroke
      clearTimeout(enqueueRequest());
      enqueueRequest(setTimeout(fetchBooks, 250));
    } else if (!getState().bookList.cachedPages[newPage]) {
      fetchBooks();
    }
  }
}

// Sets bookList.currentPage w/o fetch new page; frontend refers to cache
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

// Informs frontend whether to load loading state component
export function loading(isRequesting) {
  return {
    type: types.LOADING_STATUS,
    isRequesting,
  }
}