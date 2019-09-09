import * as types from '../constants/actionTypes.js';

export const updateInput = (input) => ({
  type: types.UPDATE_INPUT,
  payload: input,
})