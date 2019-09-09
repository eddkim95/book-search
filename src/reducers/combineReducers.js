import { combineReducers } from 'redux';
import input from './inputReducer';
import bookList from './bookListReducer';

export default combineReducers({
  input,
  bookList,
});