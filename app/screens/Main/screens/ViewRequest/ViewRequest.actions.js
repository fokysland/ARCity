import {getRequest} from '_api/request.api';

export const VIEW_REQUEST_SET_REQUEST = 'VIEW_REQUEST_SET_REQUEST';
export const setRequest = req => ({
  type: VIEW_REQUEST_SET_REQUEST,
  payload: req,
});

export const fetchRequest = reqId => async dispatch => {
  const res = await getRequest(reqId);
  if (res.ok) {
    dispatch(setRequest(res.body));
  }
};
