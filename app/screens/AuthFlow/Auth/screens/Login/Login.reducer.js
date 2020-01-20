import {SET_EMAIL, SET_PASSWORD} from './Login.actions';

const defaultState = {
  email: '',
  password: '',
};

const handlers = {
  [SET_EMAIL]: (state, email) => ({
    ...state,
    email,
  }),
  [SET_PASSWORD]: (state, password) => ({
    ...state,
    password,
  }),
  DEFAULT: state => state,
};

const loginReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default loginReducer;
