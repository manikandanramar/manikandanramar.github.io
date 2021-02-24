import { createStore, applyMiddleware, compose  } from 'redux';
import reducers from './reducer.js';
import clientMiddleware from './middlewares/clientMiddleware';

export default function configureStore(initialState, fetch) {
  const middlewares = [
    clientMiddleware(fetch)
  ];
  const composeEnhancers = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    composeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore(
    reducers,
    initialState,
    compose(...composeEnhancers)
  );
}
