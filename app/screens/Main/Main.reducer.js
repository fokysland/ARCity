import {combineReducers} from 'redux';

import mapReducer from './screens/Map/Map.reducer';
import newRequestReducer from './screens/NewRequest/NewRequest.reducer';

export default combineReducers({
  map: mapReducer,
  newRequest: newRequestReducer,
});
