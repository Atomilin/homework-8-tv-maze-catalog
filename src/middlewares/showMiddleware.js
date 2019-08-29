// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import actions from '../actions';
import { show as showApi } from '../api';

const {
  shows: { request, success, failure }
} = actions;

export default store => next => action => {
  if (action.type === request.toString()) {
    showApi(action.payload)
      .then(result => store.dispatch(success(result)))
      .catch(error => store.dispatch(failure(error)));
  }

  return next(action);
};