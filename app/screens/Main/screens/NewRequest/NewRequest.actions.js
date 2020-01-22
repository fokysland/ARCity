import {getTextValue} from '_utils/text';
import {createRequest} from '_api/request.api';
import Location from 'react-native-location';
import {getReadablePosition} from '_utils/position';

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

export const NEW_REQUEST_SET_READABLE_POSITION =
  'NEW_REQUEST_SET_READABLE_POSITION';
export const setReadablePosition = position => ({
  type: NEW_REQUEST_SET_READABLE_POSITION,
  payload: position,
});

export const CLEAR_NEW_REQUEST = 'CLEAR_NEW_REQUEST';
export const clearNewRequest = () => ({
  type: CLEAR_NEW_REQUEST,
});

export const fetchReadablePosition = position => async dispatch => {
  try {
    const readablePosition = await getReadablePosition(position);
    dispatch(setReadablePosition(readablePosition));
    dispatch(setPosition(position));
  } catch (e) {}
};

export const fetchPosition = () => async dispatch => {
  try {
    await Location.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    });
    const position = await Location.getLatestLocation();
    const readablePosition = await getReadablePosition(position);
    dispatch(setPosition(position));
    dispatch(setReadablePosition(readablePosition));
  } catch (e) {}
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
  if (!res.ok) {
    return Promise.reject();
  } else {
    return Promise.resolve();
  }
};
