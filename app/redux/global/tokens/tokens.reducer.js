import {} from './tokens.actions';

const defaultState = {
  accessToken: '',
  refreshToken: '',
};
const handlers = {
  DEFAULT: state => state,
};

const usersReducers = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};
