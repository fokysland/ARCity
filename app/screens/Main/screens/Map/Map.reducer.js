import {
  FETCH_FULFILLED,
  SET_LIKE,
  SET_RANGE,
  SET_SEARCH,
  SET_FRIEND,
  SET_OPENED,
  SET_CATEGORY,
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
  [SET_CATEGORY]: (state, category) => ({
    ...state,
    types: {
      ...state.main.map.types,
      [category]: !state.main.map.types[category],
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
