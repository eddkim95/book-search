import * as types from '../constants/actionTypes.js';

const defaultState = {
  total: 0,
  pages: 0,
  currentPage: 0,
  books: [],
  cachedPages: {},
  isRequesting: false,
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case types.UPDATE_BOOK_LIST: 
      const { payload: { numFound, docs }, currentPage } = action;
      return Object.assign({}, state, {
        total: numFound,
        pages: Math.ceil(numFound / 100),
        currentPage,
        books: docs,
        cachedPages: {
          ...state.cachedPages,
          [currentPage]: docs,
        }
      })
    case types.USE_CACHE:
      const { cachedPage } = action;
      // Booklist renders cached current page after page is set
      return Object.assign({}, state, {
        currentPage: cachedPage,
      })
    case types.CLEAR_CACHE:
      return Object.assign({}, state, {
        cachedPages: [],
      })
    case types.LOADING_STATUS:
      const { isRequesting } = action;
      return Object.assign({}, state, {
        isRequesting,
      })
    default:
      return state;
  }
}