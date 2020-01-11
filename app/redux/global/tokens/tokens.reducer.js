import {
  SAVE_REFRESH_TOKEN,
  SAVE_ACCESS_TOKEN,
  GET_TOKENS_FULFILLED,
} from './tokens.actions';

const defaultState = {
  accessToken: '',
  refreshToken: '',
};

const handlers = {
  [GET_TOKENS_FULFILLED]: (state, {accessToken, refreshToken}) => ({
    ...state,
    accessToken,
    refreshToken,
  }),
  [SAVE_ACCESS_TOKEN]: (state, accessToken) => ({...state, accessToken}),
  [SAVE_REFRESH_TOKEN]: (state, refreshToken) => ({...state, refreshToken}),
  DEFAULT: state => state,
};

const tokensReducers = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default tokensReducers;
