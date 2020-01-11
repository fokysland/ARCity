import {get, post} from '_services/network';

export const sync = () => {
  return get('/oauth/sync');
};

export const tokens = (login, password) => {
  return post('/oauth/tokens', {login, password}, false, false);
};
