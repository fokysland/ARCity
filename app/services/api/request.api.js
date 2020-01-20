import {post, get} from '_services/network';

export const createRequest = ({name, category, description, position, uri}) => {
  const form = new FormData();
  form.append('requestData[type]', category);
  form.append('requestData[name]', name);
  form.append('requestData[about]', description);
  form.append('requestData[latitude]', position.latitude);
  form.append('requestData[longitude]', position.longitude);
  form.append('requestData[image]', {
    uri: uri.uri,
    name: uri.path.split('/')[uri.path.split('/').length - 1],
    type: 'image/jpeg',
  });
  return post('/requests/create', form, true);
};

export const getRequest = id => {
  return get('/map/aboutRequest', {uuid: id});
};
