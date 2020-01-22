import {
  NEW_AR_REQUEST_SET_DESCRIPTION,
  NEW_AR_REQUEST_SET_POSITION,
  NEW_AR_REQUEST_SET_NAME,
  CLEAR_NEW_AR_REQUEST,
} from './NewARRequest.actions';
import {CLEAR} from '_screens/Main/Main.actions';

const defaultState = {
  category: 'other',
  description: '',
  position: null,
  name: '',
};

const handlers = {
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
  [CLEAR_NEW_AR_REQUEST]: () => defaultState,
  [CLEAR]: () => defaultState,
  DEFAULT: state => state,
};

const newARRequestReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default newARRequestReducer;
