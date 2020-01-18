import {combineReducers} from 'redux';

import feedReducer from './screens/Feed/Feed.reducer';
import mapReducer from './screens/Map/Map.reducer';
import chatsReducer from './screens/Chats/Chats.reducer';
import newRequestReducer from './screens/NewRequest/NewRequest.reducer';
import viewArticleReducer from './screens/ViewArticle/ViewArticle.reducer';

export default combineReducers({
  map: mapReducer,
  newRequest: newRequestReducer,
  feed: feedReducer,
  chats: chatsReducer,
  viewArticle: viewArticleReducer,
});
