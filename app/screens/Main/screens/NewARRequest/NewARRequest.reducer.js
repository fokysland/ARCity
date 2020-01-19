import {
  SET_CATEGORY,
  SET_DESCRIPTION,
  SET_POSITION,
  SET_NAME,
} from '../NewRequest/NewRequest.actions';

const defaultState = {
  category: 'other',
  description: '',
  position: null,
  name: '',
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
  DEFAULT: state => state,
};

const newARRequestReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default newARRequestReducer;
