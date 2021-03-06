import {tokens} from '_api/auth.api';

export const SAVE_ACCESS_TOKEN = 'SAVE_ACCESS_TOKEN';
export const saveAccessToken = token => ({
  type: SAVE_ACCESS_TOKEN,
  payload: token,
});

export const SAVE_REFRESH_TOKEN = 'SAVE_REFRESH_TOKEN';
export const saveRefreshToken = token => ({
  type: SAVE_REFRESH_TOKEN,
  payload: token,
});

export const GET_TOKENS_REJECTED = 'GET_TOKENS_REJECTED';
export const getTokensRejected = () => ({
  type: GET_TOKENS_REJECTED,
});

export const GET_TOKENS_FULFILLED = 'GET_TOKENS_FULFILLED';
const getTokensFulfilled = ({accessToken, refreshToken}) => ({
  type: GET_TOKENS_FULFILLED,
  payload: {accessToken, refreshToken},
});
