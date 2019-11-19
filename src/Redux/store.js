import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import reducer from './reducer';
import food from './food';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ reducer, food });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(promise)));

export default store;
