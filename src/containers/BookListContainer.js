import React from 'react';
import { connect } from 'react-redux';
import BookList from '../components/BookList.js';
import BookListLoader from '../components/BookListLoader.js';
import BookListError from '../components/BookListError.js';

const BookListContainer = (props) => {
  const { bookList, isRequesting, input } = props;
  // Handle loading state and error/empty response for non-empty query
  return (
    <div>
      { isRequesting ?
        <BookListLoader /> :
        input.length && !bookList.length ?
          <BookListError /> :
          <BookList
            bookList={bookList}
            isRequesting={isRequesting}
          /> }
    </div>
  )
}

const mapStateToProps = (store) => {
  const {
    input,
    bookList: {
      cachedPages,
      currentPage,
      books,
      isRequesting
    }
  } = store;

  return {
    input,
    bookList: cachedPages[currentPage] ?
      cachedPages[currentPage] :
      books,
    isRequesting,
  }
}

export default connect(mapStateToProps, null)(BookListContainer);

