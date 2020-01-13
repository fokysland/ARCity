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
  console.log(res.body);
  if (!res.ok) {
    dispatch(fetchRejected());
    return Promise.reject();
  } else {
    dispatch(fetchFulfilled(res.body));
    return Promise.resolve();
  }
};
