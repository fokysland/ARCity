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
