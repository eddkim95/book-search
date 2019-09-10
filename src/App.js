import React from 'react';
import Title from './components/Title';
import SearchBarContainer from './containers/SearchBarContainer';
import BookListContainer from './containers/BookListContainer';


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