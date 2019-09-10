import React from 'react';

const SearchBar = (props) => {
  const { value, updateInput, updateSearch } = props;
  
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          updateInput(e.target.value);
          updateSearch();
        }}
      />
    </div>
  )
}

export default SearchBar;