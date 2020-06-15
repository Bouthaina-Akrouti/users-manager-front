import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { all, fork } from 'redux-saga/effects';

import { manageToken } from './auth/subscription';

import { authReducer } from './auth/reducers';

import { watchLogin } from './auth/sagas';

const rootReducer = combineReducers({
  auth: authReducer,
});

function* rootSaga() {
  yield all([
    fork(watchLogin),
  ]);
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const composeEnhancer = composeWithDevTools({});

  const store = createStore(rootReducer, composeEnhancer(middlewareEnhancer));
  sagaMiddleware.run(rootSaga);
  store.subscribe(manageToken(store));
  return store;
}

export default configureStore;
