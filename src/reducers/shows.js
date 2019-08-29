import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import actions from '../actions';

const {
  shows: { request, success, failure }
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

const entities = handleActions(
  {
    [success]: (state, { payload }) => [...state, payload]
  },
  []
);

export default combineReducers({
  isFetching,
  error,
  entities
});