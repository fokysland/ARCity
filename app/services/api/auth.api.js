import {get} from '_services/network';

export const sync = () => {
  return get('/oauth/sync');
};
