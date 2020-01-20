import {getChats} from '_api/chats.api';

export const CHATS_SET_CHATS = 'CHATS_SET_CHATS';
export const setChats = chats => ({
  type: CHATS_SET_CHATS,
  payload: chats,
});

export const fetchChats = () => async dispatch => {
  const res = await getChats();
  if (res.ok) {
    setChats(res.body);
  }
};
