import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import SearchBar from '../components/SearchBar.js';
import PageSearch from '../components/PageSearch.js'

const SearchBarContainer = (props) => {
  const {
    input,
    updateInput,
    updateSearch,
    pages,
    useCache
  } = props;

  // Conditionally render UI for flipping pages
  return (
    <div>
      <SearchBar
        value={input}
        updateInput={updateInput}
        updateSearch={updateSearch}
      />
      { pages ?
        <PageSearch
          pages={pages}
          cachedPages={props.cachedPages}
          updateSearch={updateSearch}
          useCache={useCache}
        /> :
        null }
    </div>
  )
}

const mapStateToProps = (store) => {
  const {
    input,
    bookList: {
      pages,
      cachedPages,
    }
  } = store;

  return {
    input,
    pages,
    cachedPages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInput: (input) => {
      dispatch(actions.updateInput(input));
    },
    updateSearch: (newPage) => {
      dispatch(actions.updateSearch(newPage))
    },
    useCache: (cachedPage) => {
      dispatch(actions.useCache(cachedPage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

