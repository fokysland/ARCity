import {combineReducers} from 'redux';

import userReducer from './users/users.reducers';
import tokensReducer from './tokens/tokens.reducer';
import propertiesReducer from './properties/properties.reducer';

const globalReducer = combineReducers({
  user: userReducer,
  tokens: tokensReducer,
  properties: propertiesReducer,
});

export default globalReducer;
