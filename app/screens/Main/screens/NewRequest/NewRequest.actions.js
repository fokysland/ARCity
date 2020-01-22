import {getTextValue} from '_utils/text';
import {createRequest} from '_api/request.api';
import Location from 'react-native-location';

export const NEW_REQUEST_SET_CATEGORY = 'NEW_REQUEST_SET_CATEGORY';
export const setCategory = category => ({
  type: NEW_REQUEST_SET_CATEGORY,
  payload: category,
});

export const NEW_REQUEST_SET_DESCRIPTION = 'NEW_REQUEST_SET_DESCRIPTION';
export const setDescription = description => ({
  type: NEW_REQUEST_SET_DESCRIPTION,
  payload: getTextValue(description),
});

export const NEW_REQUEST_SET_POSITION = 'NEW_REQUEST_SET_POSITION';
export const setPosition = position => ({
  type: NEW_REQUEST_SET_POSITION,
  payload: position,
});

export const NEW_REQUEST_SET_NAME = 'NEW_REQUEST_SET_NAME';
export const setName = name => ({
  type: NEW_REQUEST_SET_NAME,
  payload: getTextValue(name),
});

export const NEW_REQUEST_SET_URI = 'NEW_REQUEST_SET_URI';
export const setUri = uri => ({
  type: NEW_REQUEST_SET_URI,
  payload: uri,
});

export const CLEAR_NEW_REQUEST = 'CLEAR_NEW_REQUEST';
export const clearNewRequest = () => ({
  type: CLEAR_NEW_REQUEST,
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
  } catch (e) {}
};

export const postRequest = ({
  name,
  category,
  description,
  position,
  uri,
}) => async dispatch => {
  const res = await createRequest({
    name,
    category,
    description,
    position,
    uri,
  });
  if (!res.ok) {
    return Promise.reject();
  } else {
    return Promise.resolve();
  }
};
