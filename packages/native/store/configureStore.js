import { applyMiddleware, createStore, combineReducers } from 'redux'
import reducers from './data'
import createSagaMiddleware from 'redux-saga'
import { topStories } from './data/sagas'

const sagaMiddleware = createSagaMiddleware();
const combinedReducers = combineReducers(reducers);
const middlewares = applyMiddleware(sagaMiddleware);
const store = createStore(combinedReducers, middlewares);

sagaMiddleware.run(topStories);

export default store
