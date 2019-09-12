import React from 'react';
import './App.css'
import Title from './components/Title.js';
import SearchBarContainer from './containers/SearchBarContainer.js';
import BookListContainer from './containers/BookListContainer.js';

const App = () => {
  return (
    <div id='appContainer'>
      <Title />
      <SearchBarContainer />
      <BookListContainer />
    </div>
  )
}

export default App;