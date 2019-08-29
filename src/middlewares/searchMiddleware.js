// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import actions from '../actions';
import { search as searchApi } from '../api';

const {
  search: { request, success, failure }
} = actions;

export default store => next => action => {
  if (action.type === request.toString()) {
    searchApi(action.payload)
      .then(result => store.dispatch(success(result)))
      .catch(error => store.dispatch(failure(error)));
  }

  return next(action);
};