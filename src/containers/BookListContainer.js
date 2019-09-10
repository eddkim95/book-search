import React from 'react';
import { connect } from 'react-redux';
import BookList from '../components/BookList.js';

const BookListContainer = (props) => {
  return (
    <div>
      <BookList
        bookList={props.bookList}
      />
    </div>
  )
}

const mapStateToProps = (store) => {
  const { cachedPages, currentPage, books } = store.bookList;
  return {
    bookList: cachedPages[currentPage] ? cachedPages[currentPage] : books,
  }
}

export default connect(mapStateToProps, null)(BookListContainer);

