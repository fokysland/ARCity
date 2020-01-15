const defaultState = {};
const handlers = {
  DEFAULT: state => state,
};

const usersReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default usersReducer;
