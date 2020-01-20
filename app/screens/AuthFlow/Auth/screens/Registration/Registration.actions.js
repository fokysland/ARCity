import {registerUser, tokens} from '_api/auth.api';
import {getTextValue} from '_utils/text';
import {
  goToAuth,
  goToMain,
  saveAccessToken,
  saveRefreshToken,
  setLoading,
} from '_redux/global/actions';

export const REGISTRATION_SET_URI = 'REGISTRATION_SET_URI';
export const setUri = uri => ({
  type: REGISTRATION_SET_URI,
  payload: uri,
});

export const REGISTRATION_SET_EMAIL = 'REGISTRATION_SET_EMAIL';
export const setEmail = email => ({
  type: REGISTRATION_SET_EMAIL,
  payload: getTextValue(email),
});

export const REGISTRATION_SET_NAME = 'REGISTRATION_SET_NAME';
export const setName = name => ({
  type: REGISTRATION_SET_NAME,
  payload: getTextValue(name),
});

export const REGISTRATION_SET_SURNAME = 'REGISTRATION_SET_SURNAME';
export const setSurname = surname => ({
  type: REGISTRATION_SET_SURNAME,
  payload: getTextValue(surname),
});

export const REGISTRATION_SET_PASSWORD = 'REGISTRATION_SET_PASSWORD';
export const setPassword = password => ({
  type: REGISTRATION_SET_PASSWORD,
  payload: getTextValue(password),
});

export const REGISTRATION_SET_REPEATED_PASSWORD =
  'REGISTRATION_SET_REPEATED_PASSWORD';
export const setRepeatedPassword = password => ({
  type: REGISTRATION_SET_REPEATED_PASSWORD,
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
  dispatch(setLoading(true));
  const res = await registerUser({uri, email, name, surname, password});
  if (res.ok) {
    dispatch(setRegisterFulfilled());
    const tokensRes = await tokens(email, password);
    if (tokensRes.ok) {
      dispatch(saveAccessToken(tokensRes.body.accessToken));
      dispatch(saveRefreshToken(tokensRes.body.refreshToken));
      dispatch(goToMain());
    } else {
      dispatch(setRegisterRejected());
      dispatch(goToAuth());
    }
  } else {
    dispatch(setRegisterRejected());
    dispatch(goToAuth());
  }
};
