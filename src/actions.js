import { createActions } from 'redux-actions';

export default createActions(
  {
    SEARCH: {
      REQUEST: query => query,
      SUCCESS: result =>
        result.map(({ id, name, image: { medium }, summary }) => ({
          id,
          name,
          image: medium,
          summary
        })),
      FAILURE: error => error
    },
    SHOWS: {
      REQUEST: id => id,
      SUCCESS: ({
        id,
        name,
        image: { medium },
        summary,
        _embedded: { cast }
      }) => ({
        id,
        name,
        image: medium,
        summary,
        cast: cast.map(({ person: { id, name, image: { medium } } }) => ({
          id,
          name,
          image: medium
        }))
      }),
      FAILURE: error => error
    }
  },
  {
    namespace: '_'
  }
);