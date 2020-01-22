import {
  REGISTRATION_CLEAR,
  REGISTRATION_SET_EMAIL,
  REGISTRATION_SET_NAME,
  REGISTRATION_SET_PASSWORD,
  REGISTRATION_SET_REPEATED_PASSWORD,
  REGISTRATION_SET_SURNAME,
  REGISTRATION_SET_URI,
} from './Registration.actions';
import {CLEAR} from '_screens/Main/Main.actions';

const defaultState = {
  email: '',
  name: '',
  surname: '',
  password: '',
  repeatedPassword: '',
  uri: {},
};

const handlers = {
  [REGISTRATION_SET_EMAIL]: (state, email) => ({
    ...state,
    email,
  }),
  [REGISTRATION_SET_NAME]: (state, name) => ({
    ...state,
    name,
  }),
  [REGISTRATION_SET_SURNAME]: (state, surname) => ({
    ...state,
    surname,
  }),
  [REGISTRATION_SET_PASSWORD]: (state, password) => ({
    ...state,
    password,
  }),
  [REGISTRATION_SET_REPEATED_PASSWORD]: (state, repeatedPassword) => ({
    ...state,
    repeatedPassword,
  }),
  [REGISTRATION_SET_URI]: (state, uri) => ({
    ...state,
    uri,
  }),
  [REGISTRATION_CLEAR]: () => defaultState,
  [CLEAR]: () => defaultState,
  DEFAULT: state => state,
};

const registrationReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default registrationReducer;
