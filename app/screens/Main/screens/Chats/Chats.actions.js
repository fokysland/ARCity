import {getChats} from '_api/chats.api';

export const SET_CHATS = 'SET_CHATS';
export const setChats = chats => ({
  type: SET_CHATS,
  payload: chats,
});

export const fetchChats = () => async dispatch => {
  const res = await getChats();
  if (res.ok) {
    setChats(res.body);
  }
};
