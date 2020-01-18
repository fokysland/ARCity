import {SET_ARTICLE} from './ViewArticle.actions';

const defaultState = {
  article: {},
};

const handlers = {
  [SET_ARTICLE]: (state, article) => ({
    ...state,
    article,
  }),
  DEFAULT: state => state,
};

const reducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default reducer;
