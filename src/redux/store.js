import {createStore,applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import middle from './middle'
import counter from './reducers';
let  store = createStore( counter);

export default store;