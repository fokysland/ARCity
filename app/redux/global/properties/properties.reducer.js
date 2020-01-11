// import {} from './properties.actions';

const defaultState = {
  isLoggedIn: true,
  isLoading: false,
};
const handlers = {
  DEFAULT: state => state,
};

const propertiesReducers = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default propertiesReducers;
