import {get} from '../network/index';

export const getArticle = id => {
  return get('/content/about', {uuid: id});
};
