import {GO_TO_AUTH, SET_LOADING, GO_TO_MAIN} from './properties.actions';

const defaultState = {
  isLoggedIn: false,
  isLoading: true,
};
const handlers = {
  [SET_LOADING]: (state, isLoading) => ({...state, isLoading}),
  [GO_TO_MAIN]: state => ({...state, isLoading: false, isLoggedIn: true}),
  [GO_TO_AUTH]: state => ({...state, isLoggedIn: false, isLoading: false}),
  DEFAULT: state => state,
};

const propertiesReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default propertiesReducer;
