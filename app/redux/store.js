import {createStore, combineReducers} from 'redux';
import globalReducer from './global/reducers';

const combinedReducers = combineReducers({
  global: globalReducer,
});

export const store = createStore(combinedReducers);
