import {SET_VISIBLE} from '_screens/Main/Main.actions';

import {combineReducers} from 'redux';

import feedReducer from './screens/Feed/Feed.reducer';
import mapReducer from './screens/Map/Map.reducer';
import chatsReducer from './screens/Chats/Chats.reducer';
import newRequestReducer from './screens/NewRequest/NewRequest.reducer';
import newARRequestReducer from './screens/NewARRequest/NewARRequest.reducer';
import viewArticleReducer from './screens/ViewArticle/ViewArticle.reducer';
import viewRequestReducer from './screens/ViewRequest/ViewRequest.reducer';

const defaultState = {
  isVisible: true,
};

const handlers = {
  [SET_VISIBLE]: (state, isVisible) => ({
    ...state,
    isVisible,
  }),
  DEFAULT: state => state,
};

const commonReducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default combineReducers({
  map: mapReducer,
  newRequest: newRequestReducer,
  newARRequest: newARRequestReducer,
  feed: feedReducer,
  chats: chatsReducer,
  viewArticle: viewArticleReducer,
  viewRequest: viewRequestReducer,
  common: commonReducer,
});
