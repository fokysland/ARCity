import {
  NEW_REQUEST_SET_CATEGORY,
  NEW_REQUEST_SET_DESCRIPTION,
  NEW_REQUEST_SET_POSITION,
  NEW_REQUEST_SET_NAME,
  NEW_REQUEST_SET_URI,
  CLEAR_NEW_REQUEST,
  NEW_REQUEST_SET_READABLE_POSITION,
} from './NewRequest.actions';
import {CLEAR} from '_screens/Main/Main.actions';

const defaultState = {
  category: 'bench',
  description: '',
  name: '',
  readablePosition: '',
  position: {
    longitude: 0,
    latitude: 0,
  },
  uri: {},
};

const handlers = {
  [NEW_REQUEST_SET_CATEGORY]: (state, category) => ({
    ...state,
    category,
  }),
  [NEW_REQUEST_SET_POSITION]: (state, position) => ({
    ...state,
    position,
  }),
  [NEW_REQUEST_SET_DESCRIPTION]: (state, description) => ({
    ...state,
    description,
  }),
  [NEW_REQUEST_SET_NAME]: (state, name) => ({
    ...state,
    name,
  }),
  [NEW_REQUEST_SET_URI]: (state, uri) => ({
    ...state,
    uri,
  }),
  [NEW_REQUEST_SET_READABLE_POSITION]: (state, readablePosition) => ({
    ...state,
    readablePosition,
  }),
  [CLEAR_NEW_REQUEST]: () => defaultState,
  [CLEAR]: () => defaultState,
  DEFAULT: state => state,
};

const newRequestReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default newRequestReducer;
