import {post, get} from '_services/network';

const getLast = array => array[array.length - 1];

export const createRequest = ({
  title,
  category,
  description,
  position,
  uri,
}) => {
  const form = new FormData();
  form.append('requestData[type]', category);
  form.append('requestData[title]', title);
  form.append('requestData[about]', description);
  form.append('requestData[latitude]', position.latitude);
  form.append('requestData[longitude]', position.longitude);
  form.append('requestData[image]', {
    uri: uri.uri ? uri.uri : 'file:///storage/emulated/0/' + uri,
    name: uri.path ? getLast(uri.path.split('/')) : getLast(uri.split('/')),
    type: 'image/jpeg',
  });
  return post('/requests/create', form, true);
};

export const getRequest = id => {
  return get('/map/aboutRequest', {uuid: id});
};
