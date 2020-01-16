import {combineReducers} from 'redux';

import registrationReducer from './Auth/screens/Registration/Registration.reducer';
import loginReducer from './Auth/screens/Login/Login.reducer';

export default combineReducers({
  register: registrationReducer,
  login: loginReducer,
});
