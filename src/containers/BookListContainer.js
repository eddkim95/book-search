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

const mapStateToProps = (store) => ({
  bookList: store.bookList,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);

