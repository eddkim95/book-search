import React from 'react';

const SearchBar = (props) => {
  const { value, handleChange } = props;
  return (
    <div>
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;