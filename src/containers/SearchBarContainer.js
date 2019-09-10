import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import SearchBar from '../components/SearchBar.js';

const SearchBarContainer = (props) => {
  return (
    <div>
      <SearchBar
        value={props.input}
        handleChange={props.updateSearch}
      />
    </div>
  )
}

const mapStateToProps = (store) => ({
  input: store.input,
})

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (input) => {
    dispatch(actions.updateSearch(input))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

