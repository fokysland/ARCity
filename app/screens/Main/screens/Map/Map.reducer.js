import {
  MAP_FETCH_FULFILLED,
  MAP_SET_LIKE,
  MAP_SET_RANGE,
  MAP_SET_SEARCH,
  MAP_SET_FRIEND,
  MAP_SET_OPENED,
  MAP_SET_CATEGORY,
  MAP_SET_POSITION,
} from './Map.actions';
import {CLEAR} from '_screens/Main/Main.actions';

const defaultState = {
  requests: [],
  opened: false,
  like: false,
  friend: false,
  range: 5,
  categories: {
    bench: true,
    lamp: true,
    urn: true,
    flowerbed: true,
    ramp: true,
    other: true,
  },
  position: {
    longitude: 55,
    latitude: 37,
  },
};

const handlers = {
  [MAP_FETCH_FULFILLED]: (state, requests) => ({
    ...state,
    requests,
  }),
  [MAP_SET_SEARCH]: (state, search) => ({
    ...state,
    search,
  }),
  [MAP_SET_RANGE]: (state, range) => ({
    ...state,
    range,
  }),
  [MAP_SET_LIKE]: state => ({
    ...state,
    like: !state.like,
  }),
  [MAP_SET_FRIEND]: state => ({
    ...state,
    friend: !state.friend,
  }),
  [MAP_SET_CATEGORY]: (state, category) => ({
    ...state,
    categories: {
      ...state.categories,
      [category]: !state.categories[category],
    },
  }),
  [MAP_SET_OPENED]: state => ({
    ...state,
    opened: !state.opened,
  }),
  [MAP_SET_POSITION]: (state, position) => ({
    ...state,
    position,
  }),
  [CLEAR]: () => defaultState,
  DEFAULT: state => state,
};

const mapReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default mapReducer;
