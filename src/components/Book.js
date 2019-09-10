import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      {title}
      {author}
    </div>
  )
}

export default Book;