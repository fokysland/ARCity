import {combineReducers} from 'redux';

import userReducer from './users/users.reducers';
import tokensReducer from './tokens/tokens.reducer';

const globalReducer = combineReducers({
  user: userReducer,
  tokens: tokensReducer,
});

export default globalReducer;
