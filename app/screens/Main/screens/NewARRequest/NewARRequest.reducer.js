import {
  NEW_AR_REQUEST_SET_CATEGORY,
  NEW_AR_REQUEST_SET_DESCRIPTION,
  NEW_AR_REQUEST_SET_POSITION,
  NEW_AR_REQUEST_SET_NAME,
} from './NewARRequest.actions';

const defaultState = {
  category: 'other',
  description: '',
  position: null,
  name: '',
};

const handlers = {
  [NEW_AR_REQUEST_SET_CATEGORY]: (state, category) => ({
    ...state,
    category,
  }),
  [NEW_AR_REQUEST_SET_POSITION]: (state, position) => ({
    ...state,
    position,
  }),
  [NEW_AR_REQUEST_SET_DESCRIPTION]: (state, description) => ({
    ...state,
    description,
  }),
  [NEW_AR_REQUEST_SET_NAME]: (state, name) => ({
    ...state,
    name,
  }),
  DEFAULT: state => state,
};

const newARRequestReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default newARRequestReducer;
