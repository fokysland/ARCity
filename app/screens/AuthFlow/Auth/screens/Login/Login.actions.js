import {tokens} from '_api/auth.api';
import {getTextValue} from '_utils/text';

export const SET_EMAIL = 'SET_EMAIL';
export const setEmail = email => ({
  type: SET_EMAIL,
  payload: getTextValue(email),
});

export const SET_PASSWORD = 'SET_PASSWORD';
export const setPassword = password => ({
  type: SET_PASSWORD,
  payload: getTextValue(password),
});

export const SET_LOGIN_FULFILLED = 'SET_LOGIN_FULFILLED';
export const setLoginFulfilled = () => ({
  type: SET_LOGIN_FULFILLED,
});
export const SET_LOGIN_REJECTED = 'SET_LOGIN_REJECTED';
export const setLoginRejected = () => ({
  type: SET_LOGIN_REJECTED,
});

export const login = ({email, password}) => async dispatch => {
  const res = tokens(email, password);
  if (res.ok) {
    dispatch(setLoginFulfilled());
  } else {
    dispatch(setLoginRejected());
  }
};
