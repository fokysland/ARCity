import {get} from '_services/network';

export const feed = () => {
  return get('/content/watch');
};
