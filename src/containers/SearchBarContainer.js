import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import SearchBar from '../components/SearchBar.js';

const SearchBarContainer = (props) => {
  return (
    <div>
      <SearchBar
        value={props.input}
        updateInput={props.updateInput}
        updateSearch={props.updateSearch}
      />
    </div>
  )
}

const mapStateToProps = (store) => ({
  input: store.input,
})

const mapDispatchToProps = (dispatch) => ({
  updateInput: (input) => {
    dispatch(actions.updateInput(input));
  },
  updateSearch: () => {
    dispatch(actions.updateSearch())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

