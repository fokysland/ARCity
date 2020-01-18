import {registerUser} from '_api/auth.api';
import {getTextValue} from '_utils/text';

export const SET_URI = 'SET_URI';
export const setUri = uri => ({
  type: SET_URI,
  payload: uri.uri,
});

export const SET_EMAIL = 'SET_EMAIL';
export const setEmail = email => ({
  type: SET_EMAIL,
  payload: getTextValue(email),
});

export const SET_NAME = 'SET_NAME';
export const setName = name => ({
  type: SET_NAME,
  payload: getTextValue(name),
});

export const SET_SURNAME = 'SET_SURNAME';
export const setSurname = surname => ({
  type: SET_SURNAME,
  payload: getTextValue(surname),
});

export const SET_PASSWORD = 'SET_PASSWORD';
export const setPassword = password => ({
  type: SET_PASSWORD,
  payload: getTextValue(password),
});

export const SET_REPEATED_PASSWORD = 'SET_REPEATED_PASSWORD';
export const setRepeatedPassword = password => ({
  type: SET_REPEATED_PASSWORD,
  payload: getTextValue(password),
});

export const SET_REGISTER_FULFILLED = 'SET_REGISTER_FULFILLED';
export const setRegisterFulfilled = () => ({
  type: SET_REGISTER_FULFILLED,
});
export const SET_REGISTER_REJECTED = 'SET_REGISTER_REJECTED';
export const setRegisterRejected = () => ({
  type: SET_REGISTER_REJECTED,
});

export const register = ({
  uri,
  email,
  name,
  surname,
  password,
}) => async dispatch => {
  const res = registerUser(uri, email, name, surname, password);
  if (res.ok) {
    dispatch(setRegisterFulfilled());
  } else {
    dispatch(setRegisterRejected());
  }
};
