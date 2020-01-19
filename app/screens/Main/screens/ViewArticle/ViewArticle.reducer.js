import {SET_ARTICLE} from './ViewArticle.actions';

const defaultState = {
  article: {},
};

const handlers = {
  [SET_ARTICLE]: (state, article) => {
    const newArticle = {
      dislikes: article.dislikes,
      likes: article.likes,
      title: article.header,
      name: article.name + ' ' + article.surname,
      text: article.text,
      userId: article.userId,
      photos: article.imagesUrl,
    };
    return {
      ...state,
      article: newArticle,
    };
  },
  DEFAULT: state => state,
};

const reducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default reducer;
