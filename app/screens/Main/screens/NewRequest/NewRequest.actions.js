export const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category,
});

export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const setDescription = description => ({
  type: SET_DESCRIPTION,
  payload: description,
});

export const SET_POSITION = 'SET_POSITION';
export const setPosition = position => ({
  type: SET_POSITION,
  payload: position,
});

export const POST_FULFILLED = 'POST_FULFILLED';
export const postFulfilled = () => ({
  type: POST_FULFILLED,
});

export const POST_REJECTED = 'POST_REJECTED';
export const postRejected = () => ({
  type: POST_REJECTED,
});

export const postRequest = () => async dispatch => {};
