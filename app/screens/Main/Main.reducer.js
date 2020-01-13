import {combineReducers} from 'redux';

import mapReducer from './screens/Map/Map.reducer';

export default combineReducers({map: mapReducer});
