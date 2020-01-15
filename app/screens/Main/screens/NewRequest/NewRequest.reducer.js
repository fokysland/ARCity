import {
  POST_FULFILLED,
  POST_REJECTED,
  SET_CATEGORY,
  SET_DESCRIPTION,
  SET_POSITION,
} from './NewRequest.actions';

const defaultState = {
  category: 'other',
  description: 'Расскажи обо мне немного больше',
  position: null,
  error: null,
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
  [POST_FULFILLED]: state => ({
    ...state,
    error: null,
  }),
  [POST_REJECTED]: state => ({
    ...state,
    error: 'Ошибка сервера',
  }),
  DEFAULT: state => state,
};

const mapReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default mapReducer;
