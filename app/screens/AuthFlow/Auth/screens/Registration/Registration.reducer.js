import {
  SET_EMAIL,
  SET_NAME,
  SET_PASSWORD,
  SET_REPEATED_PASSWORD,
  SET_SURNAME,
  SET_URI,
} from './Registration.actions';

const defaultState = {
  email: '',
  name: '',
  surname: '',
  password: '',
  repeatedPassword: '',
  uri: '',
};

const handlers = {
  [SET_EMAIL]: (state, email) => ({
    ...state,
    email,
  }),
  [SET_NAME]: (state, name) => ({
    ...state,
    name,
  }),
  [SET_SURNAME]: (state, surname) => ({
    ...state,
    surname,
  }),
  [SET_PASSWORD]: (state, password) => ({
    ...state,
    password,
  }),
  [SET_REPEATED_PASSWORD]: (state, repeatedPassword) => ({
    ...state,
    repeatedPassword,
  }),
  [SET_URI]: (state, uri) => ({
    ...state,
    uri,
  }),
  DEFAULT: state => state,
};

const registrationReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default registrationReducer;
