import {getTextValue} from '_utils/text';
import {createRequest} from '_api/request.api';
import Location from 'react-native-location';

export const NEW_AR_REQUEST_SET_DESCRIPTION = 'NEW_AR_REQUEST_SET_DESCRIPTION';
export const setDescription = description => ({
  type: NEW_AR_REQUEST_SET_DESCRIPTION,
  payload: getTextValue(description),
});

export const NEW_AR_REQUEST_SET_POSITION = 'NEW_AR_REQUEST_SET_POSITION';
export const setPosition = position => ({
  type: NEW_AR_REQUEST_SET_POSITION,
  payload: position,
});

export const NEW_AR_REQUEST_SET_NAME = 'NEW_AR_REQUEST_SET_NAME';
export const setName = name => ({
  type: NEW_AR_REQUEST_SET_NAME,
  payload: getTextValue(name),
});

export const CLEAR_NEW_AR_REQUEST = 'CLEAR_NEW_AR_REQUEST';
export const clearNewARRequest = () => ({
  type: CLEAR_NEW_AR_REQUEST,
});

export const fetchPosition = () => async dispatch => {
  try {
    await Location.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    });
    const position = await Location.getLatestLocation();
    dispatch(setPosition(position));
  } catch (e) {
    console.log(e);
  }
};

export const postRequest = ({
  title,
  category,
  description,
  position,
  uri,
}) => async dispatch => {
  const res = await createRequest({
    title,
    category,
    description,
    position,
    uri,
  });
  console.log(res);
  if (!res.ok) {
    return Promise.reject();
  } else {
    dispatch(clearNewARRequest());
    return Promise.resolve();
  }
};
