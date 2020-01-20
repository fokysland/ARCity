import {
  SET_CATEGORY,
  SET_DESCRIPTION,
  SET_POSITION,
  SET_NAME,
  SET_URI,
} from './NewRequest.actions';

const defaultState = {
  category: 'bench',
  description: '',
  name: '',
  position: {
    longitude: 55,
    latitude: 33,
  },
  uri: {},
};

const handlers = {
  [SET_CATEGORY]: (state, category) => ({
    ...state,
    category,
  }),
  [SET_POSITION]: (state, position) => ({
    ...state,
    position,
  }),
  [SET_DESCRIPTION]: (state, description) => ({
    ...state,
    description,
  }),
  [SET_NAME]: (state, name) => ({
    ...state,
    name,
  }),
  [SET_URI]: (state, uri) => ({
    ...state,
    uri,
  }),
  DEFAULT: state => state,
};

const newRequestReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default newRequestReducer;
