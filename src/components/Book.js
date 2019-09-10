import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <h4>{title}</h4>
      {author}
    </div>
  )
}

export default Book;