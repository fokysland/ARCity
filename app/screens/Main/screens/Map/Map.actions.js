import {getRequests} from '_api/map.api';

export const MAP_FETCH_FULFILLED = 'MAP_FETCH_FULFILLED';
export const fetchFulfilled = data => ({
  type: MAP_FETCH_FULFILLED,
  payload: data,
});

export const MAP_FETCH_REJECTED = 'MAP_FETCH_REJECTED';
export const fetchRejected = () => ({
  type: MAP_FETCH_REJECTED,
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

export const MAP_SET_SEARCH = 'MAP_SET_SEARCH';
export const setSearch = search => ({
  type: MAP_SET_SEARCH,
  payload: search,
});

export const MAP_SET_LIKE = 'MAP_SET_LIKE';
// setLike will just change field like to !like
export const setLike = () => ({
  type: MAP_SET_LIKE,
});

export const MAP_SET_FRIEND = 'MAP_SET_FRIEND';
// same as above
export const setFriend = () => ({
  type: MAP_SET_FRIEND,
});

export const MAP_SET_RANGE = 'MAP_SET_RANGE';
export const setRange = range => ({
  type: MAP_SET_RANGE,
  payload: range,
});

export const MAP_SET_CATEGORY = 'MAP_SET_CATEGORY';
export const setCategory = category => ({
  type: MAP_SET_CATEGORY,
  payload: category,
});

export const MAP_SET_OPENED = 'MAP_SET_OPENED';
export const setOpened = () => ({
  type: SET_OPENED,
});
