import {get} from '_services/network';

export const getRequests = () => {
  return get('/map/allRequests');
};
