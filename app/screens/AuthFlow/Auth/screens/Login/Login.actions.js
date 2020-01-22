import {tokens} from '_api/auth.api';
import {getTextValue} from '_utils/text';
import {
  goToAuth,
  goToMain,
  setLoading,
} from '_redux/global/properties/properties.actions';
import {saveAccessToken, saveRefreshToken} from '_redux/global/actions';

export const LOGIN_SET_EMAIL = 'LOGIN_SET_EMAIL';
export const setEmail = email => ({
  type: LOGIN_SET_EMAIL,
  payload: getTextValue(email),
});

export const LOGIN_SET_PASSWORD = 'LOGIN_SET_PASSWORD';
export const setPassword = password => ({
  type: LOGIN_SET_PASSWORD,
  payload: getTextValue(password),
});

export const LOGIN_CLEAR = 'LOGIN_CLEAR';
export const loginClear = () => ({
  type: LOGIN_CLEAR,
});

export const SET_LOGIN_FULFILLED = 'SET_LOGIN_FULFILLED';
export const setLoginFulfilled = () => ({
  type: SET_LOGIN_FULFILLED,
});
export const SET_LOGIN_REJECTED = 'SET_LOGIN_REJECTED';
export const setLoginRejected = () => ({
  type: SET_LOGIN_REJECTED,
});

export const login = (email, password) => async dispatch => {
  dispatch(setLoading(true));
  const res = await tokens(email, password);
  if (res.ok) {
    dispatch(saveRefreshToken(res.body.refreshToken));
    dispatch(saveAccessToken(res.body.accessToken));
    dispatch(setLoginFulfilled());
    dispatch(loginClear());
    dispatch(goToMain());
  } else {
    dispatch(setLoginRejected());
    dispatch(goToAuth());
  }
};
