import {getRequest, shareRequest} from '_api/request.api';

export const VIEW_REQUEST_SET_REQUEST = 'VIEW_REQUEST_SET_REQUEST';
export const setRequest = req => ({
  type: VIEW_REQUEST_SET_REQUEST,
  payload: req,
});

export const fetchRequest = reqId => async dispatch => {
  const res = await getRequest(reqId);
  console.log(res.body);
  if (res.ok) {
    dispatch(setRequest(res.body));
  }
};

export const share = reqId => async () => {
  await shareRequest(reqId);
};

export const VIEW_REQUEST_INCREASE_LIKES = 'VIEW_REQUEST_INCREASE_LIKES';
export const increaseLikes = () => ({
  type: VIEW_REQUEST_INCREASE_LIKES,
});

export const VIEW_REQUEST_INCREASE_DISLIKES = 'VIEW_REQUEST_INCREASE_DISLIKES';
export const increaseDislikes = () => ({
  type: VIEW_REQUEST_INCREASE_DISLIKES,
});
