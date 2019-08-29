import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducers';
import search from './middlewares/searchMiddleware';
import show from './middlewares/showMiddleware';

export default function() {
  return createStore(
    reducer,
    compose(
      applyMiddleware(search),
      applyMiddleware(show),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : _ => _
    )
  );
}