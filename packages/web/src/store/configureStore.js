import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import reducers from './data'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './data/sagas'


const combinedReducers = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [applyMiddleware(sagaMiddleware)];

const reduxDevToolsExtension = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__) ?
  window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined;

if (reduxDevToolsExtension) {
  middlewares.push(reduxDevToolsExtension);
}

const composedMiddlewares = compose(...middlewares);
const store = createStore(combinedReducers, composedMiddlewares);
sagaMiddleware.run(rootSaga);

export default store
