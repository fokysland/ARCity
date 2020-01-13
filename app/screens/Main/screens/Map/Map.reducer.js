import {FETCH_FULFILLED} from './Map.actions';

const defaultState = {
  requests: [],
};

const handlers = {
  [FETCH_FULFILLED]: (state, requests) => ({
    ...state,
    requests,
  }),
  DEFAULT: state => state,
};

const mapReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default mapReducer;
