import {post, get} from '_services/network';

export const createRequest = (name, type, about) => {
  return post('/requests/create', {name, type, about});
};

export const getRequest = id => {
  return get('/map/aboutRequest', {uuid: id});
};
