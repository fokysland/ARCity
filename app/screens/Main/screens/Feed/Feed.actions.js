import {feed} from '_api/feed.api';

export const FEED_SET_CONTENT = 'FEED_SET_CONTENT';
export const setContent = newFeed => ({
  type: FEED_SET_CONTENT,
  payload: newFeed,
});

export const FEED_FETCH_REJECTED = 'FEED_FETCH_REJECTED';
export const fetchRejected = () => ({
  type: FEED_FETCH_REJECTED,
});

export const fetchContent = () => async dispatch => {
  const res = await feed();
  if (res.ok) {
    dispatch(setContent(res.body));
  } else {
    dispatch(fetchRejected());
  }
};
