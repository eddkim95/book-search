import React from 'react';
import Book from './Book.js';

const BookList = (props) => {
  const {
    bookList
  } = props;
  
  return (
    <div>
      {bookList.map((book, i) => {
        return <Book
          title={book.title}
          author={book.author_name}
          key={book.key + i}
        />
      })}
    </div>
  ) 
}

export default BookList;