import {feed} from '_api/feed.api';

export const SET_CONTENT = 'SET_CONTENT';
export const setContent = newFeed => ({
  type: SET_CONTENT,
  payload: newFeed,
});

export const FETCH_REJECTED = 'FETCH_REJECTED';
export const fetchRejected = () => ({
  type: FETCH_REJECTED,
});

export const fetchContent = () => async dispatch => {
  const res = await feed();
  if (res.ok) {
    dispatch(setContent(res.body));
  } else {
    dispatch(fetchRejected());
  }
};
