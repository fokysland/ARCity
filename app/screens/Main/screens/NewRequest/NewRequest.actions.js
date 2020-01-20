import {getTextValue} from '_utils/text';
import {createRequest} from '_api/request.api';

export const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category,
});

export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const setDescription = description => ({
  type: SET_DESCRIPTION,
  payload: getTextValue(description),
});

export const SET_POSITION = 'SET_POSITION';
export const setPosition = position => ({
  type: SET_POSITION,
  payload: position,
});

export const SET_NAME = 'SET_NAME';
export const setName = name => ({
  type: SET_NAME,
  payload: getTextValue(name),
});

export const SET_URI = 'SET_URI';
export const setUri = uri => ({
  type: SET_URI,
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
