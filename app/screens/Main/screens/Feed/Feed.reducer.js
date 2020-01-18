import {SET_CONTENT} from '_screens/Main/screens/Feed/Feed.actions';

const defaultState = {
  content: [],
};

const handlers = {
  [SET_CONTENT]: (state, content) => ({
    ...state,
    content,
  }),
  DEFAULT: state => state,
};

const feedReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default feedReducer;
