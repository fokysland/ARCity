import {getRequest} from '_api/request.api';

export const SET_REQUEST = 'SET_REQUEST';
export const setRequest = req => ({
  type: SET_REQUEST,
  payload: req,
});

export const fetchRequest = reqId => async dispatch => {
  const res = await getRequest(reqId);
  if (res.ok) {
    dispatch(setRequest(res.body));
  }
};
