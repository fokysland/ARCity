import {
  FETCH_FULFILLED,
  SET_LIKE,
  SET_RANGE,
  SET_SEARCH,
  SET_FRIEND,
  SET_TYPE,
  SET_OPENED,
} from './Map.actions';

const defaultState = {
  requests: [],
  opened: false,
  like: false,
  friend: false,
  range: 5,
  types: {
    bench: true,
    lamp: true,
    urn: true,
    flowerbed: true,
    ramp: true,
    other: true,
  },
};

const handlers = {
  [FETCH_FULFILLED]: (state, requests) => ({
    ...state,
    requests,
  }),
  [SET_SEARCH]: (state, search) => ({
    ...state,
    search,
  }),
  [SET_RANGE]: (state, range) => ({
    ...state,
    range,
  }),
  [SET_LIKE]: state => ({
    ...state,
    like: !state.main.map.like,
  }),
  [SET_FRIEND]: state => ({
    ...state,
    friend: !state.main.map.friend,
  }),
  [SET_TYPE]: (state, type) => ({
    ...state,
    types: {
      ...state.main.map.types,
      [type]: !state.main.map.types[type],
    },
  }),
  [SET_OPENED]: state => ({
    ...state,
    opened: !state.main.map.opened,
  }),
  DEFAULT: state => state,
};

const mapReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default mapReducer;
