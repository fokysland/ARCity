import {getTextValue} from '_utils/text';
import {createRequest} from '_api/request.api';

export const NEW_AR_REQUEST_SET_CATEGORY = 'NEW_AR_REQUEST_SET_CATEGORY';
export const setCategory = category => ({
  type: NEW_AR_REQUEST_SET_CATEGORY,
  payload: category,
});

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

export const NEW_AR_REQUEST_SET_URI = 'NEW_AR_REQUEST_SET_URI';
export const setUri = uri => ({
  type: NEW_AR_REQUEST_SET_URI,
  payload: uri,
});

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
