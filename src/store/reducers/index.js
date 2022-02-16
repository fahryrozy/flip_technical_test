import {combineReducers} from 'redux';

import transactionReducer from './trxReducers';

const reducers = {
  transaction: transactionReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
