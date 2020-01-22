import {FEED_SET_CONTENT} from '_screens/Main/screens/Feed/Feed.actions';
import {CLEAR} from '_screens/Main/Main.actions';

const defaultState = {
  content: [],
};

const handlers = {
  [FEED_SET_CONTENT]: (state, content) => ({
    ...state,
    content,
  }),
  [CLEAR]: () => defaultState,
  DEFAULT: state => state,
};

const feedReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default feedReducer;
