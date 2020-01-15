import {post} from '_services/network';

export const postRequest = (name, type, about) => {
  return post('/requests/create', {name, type, about});
};
