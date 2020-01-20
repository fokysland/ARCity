import {get, post} from '_services/network';

export const sync = () => {
  return get('/oauth/sync');
};

export const tokens = (email, password) => {
  return post('/oauth/tokens', {email, password}, false, false);
};

export const registerUser = ({uri, email, name, surname, password}) => {
  const form = new FormData();
  form.append('requestData[email]', email);
  form.append('requestData[name]', name);
  form.append('requestData[surname]', surname);
  form.append('requestData[password]', password);
  form.append('requestData[image]', {
    uri: uri.uri,
    name: uri.path.split('/')[uri.path.split('/').length - 1],
    type: 'image/jpeg',
  });

  return post('/register', form, true);
};
