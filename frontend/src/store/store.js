import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../store/reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
