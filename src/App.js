import React from 'react';
import Title from './components/Title.js';
import SearchBarContainer from './containers/SearchBarContainer.js';
import BookListContainer from './containers/BookListContainer.js';

const App = () => {
  return (
    <div>
      <Title />
      <SearchBarContainer />
      <BookListContainer />
    </div>
  )
}

export default App;