export const SET_VISIBLE = 'SET_VISIBLE';
export const setVisible = value => ({
  type: SET_VISIBLE,
  payload: value,
});

export const CLEAR = 'CLEAR';
export const clear = () => ({
  type: CLEAR,
});
