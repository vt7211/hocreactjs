import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers';

function configureStoreProd(initialState = {}) {
  const middleware = [thunk];

  const store = createStore(
    combineReducers({
      ...rootReducer,
    }),
    initialState,
    compose(
      applyMiddleware(...middleware)
    )
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

function configureStoreDev(initialState = {}) {
  const middleware = [thunk];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers({
      ...rootReducer,
    }),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
