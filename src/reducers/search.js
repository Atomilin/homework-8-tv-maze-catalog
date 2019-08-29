import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import actions from '../actions';

const {
  search: { request, success, failure }
} = actions;

const isFetching = handleActions(
  {
    [request]: state => true,
    [success]: state => false,
    [failure]: state => false
  },
  false
);

const error = handleActions(
  {
    [success]: state => '',
    [failure]: (state, { payload }) => payload
  },
  ''
);

const result = handleActions(
  {
    [success]: (state, { payload }) => payload
  },
  []
);

export default combineReducers({
  isFetching,
  error,
  result
});