import {CHATS_SET_CHATS} from '_screens/Main/screens/Chats/Chats.actions';

const defaultState = {
  chats: [],
};

const handlers = {
  [CHATS_SET_CHATS]: (state, chats) => ({
    ...state,
    chats,
  }),
  DEFAULT: state => state,
};

const reducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default reducer;
