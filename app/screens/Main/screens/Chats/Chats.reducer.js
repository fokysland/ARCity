import {CHATS_SET_CHATS} from '_screens/Main/screens/Chats/Chats.actions';
import {CLEAR} from '_screens/Main/Main.actions';

const defaultState = {
  chats: [],
};

const handlers = {
  [CHATS_SET_CHATS]: (state, chats) => {
    return state;
  },
  [CLEAR]: () => defaultState,
  DEFAULT: state => state,
};

const reducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default reducer;
