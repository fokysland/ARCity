import {
  LOGIN_SET_EMAIL,
  LOGIN_SET_PASSWORD,
  LOGIN_CLEAR,
} from './Login.actions';
import {CLEAR} from '_screens/Main/Main.actions';

const defaultState = {
  email: '',
  password: '',
};

const handlers = {
  [LOGIN_SET_EMAIL]: (state, email) => ({
    ...state,
    email,
  }),
  [LOGIN_SET_PASSWORD]: (state, password) => ({
    ...state,
    password,
  }),
  [LOGIN_CLEAR]: () => defaultState,
  [CLEAR]: () => defaultState,
  DEFAULT: state => state,
};

const loginReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default loginReducer;
