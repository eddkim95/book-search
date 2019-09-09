import React from 'react';
import Title from './components/Title';
import SearchBarContainer from './containers/SearchBarContainer';
import BookListContainer from './containers/BookListContainer';
import SearchBar from './components/SearchBar'


const App = () => {
  return (
    <div>
      <Title />
      <SearchBarContainer />
    </div>
  )
}

export default App;