import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// we can directly pass logger to applyMiddleware but if we need to add multiple middlewares in that cases its better to create an array and destructure it as applyMiddleware can take infinite number of middleware
const middlwares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlwares));

export default store;