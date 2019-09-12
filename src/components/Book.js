import React from 'react';

const Book = (props) => {
  const {
    title,
    author
  } = props;
  
  return (
    <div className='book'>
      <text className='bookTitle'>{title}</text><br />
      <text className='bookAuthor'>{author}</text>
    </div>
  )
}

export default Book;