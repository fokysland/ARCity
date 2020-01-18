import {get} from '../network/index';

export const getChats = () => {
  return get('/api/v1/chats/allChats');
};
