import {getTextValue} from '_utils/text';

export const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: getTextValue(category),
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
  payload: uri.uri,
});

export const postRequest = ({
  name,
  type,
  about,
  description,
  position,
}) => async dispatch => {
  const res = postRequest({
    name,
    type,
    about,
    description,
    position,
  });
  if (!res.ok) {
    return Promise.reject();
  } else {
    return Promise.resolve();
  }
};
