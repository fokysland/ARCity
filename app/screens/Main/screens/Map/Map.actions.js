import {getRequests} from '_api/map.api';

export const FETCH_FULFILLED = 'FETCH_FULFILLED';
export const fetchFulfilled = data => ({
  type: FETCH_FULFILLED,
  payload: data,
});

export const FETCH_REJECTED = 'FETCH_REJECTED';
export const fetchRejected = () => ({
  type: FETCH_REJECTED,
});

export const fetchRequests = () => async dispatch => {
  const res = await getRequests();
  if (!res.ok) {
    dispatch(fetchRejected());
    return Promise.reject();
  } else {
    dispatch(fetchFulfilled(res.body));
    return Promise.resolve();
  }
};

export const SET_SEARCH = 'SET_SEARCH';
export const setSearch = search => ({
  type: SET_SEARCH,
  payload: search,
});

export const SET_LIKE = 'SET_LIKE';
// setLike will just change field like to !like
export const setLike = () => ({
  type: SET_LIKE,
});

export const SET_FRIEND = 'SET_FRIEND';
// same as above
export const setFriend = () => ({
  type: SET_FRIEND,
});

export const SET_RANGE = 'SET_RANGE';
export const setRange = range => ({
  type: SET_RANGE,
  payload: range,
});

export const SET_TYPE = 'SET_TYPE';
export const setType = type => ({
  type: SET_TYPE,
  payload: type,
});

export const SET_OPENED = 'SET_OPENED';
export const setOpened = () => ({
  type: SET_OPENED,
});
