import {get, post} from '_services/network';

export const sync = () => {
  return get('/oauth/sync');
};

export const tokens = (email, password) => {
  return post('/oauth/tokens', {email, password}, false, false);
};

export const registerUser = (uri, email, name, surname, password) => {
  return post('/register', {email, name, surname, password});
};
