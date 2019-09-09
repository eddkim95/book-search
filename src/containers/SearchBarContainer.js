import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import SearchBar from '../components/SearchBar.js';

const SearchBarContainer = (props) => {
  return (
    <div>
      <SearchBar
        value={props.input}
        handleChange={props.updateInput}
      />
    </div>
  )
}

const mapStateToProps = (store) => ({
  input: store.currentSearch,

})

const mapDispatchToProps = (dispatch) => ({
  updateInput: (input) => {
    dispatch(actions.updateInput(input))
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

