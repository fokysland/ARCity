import {VIEW_ARTICLE_SET_ARTICLE} from './ViewArticle.actions';
import {CLEAR} from '_screens/Main/Main.actions';

const defaultState = {
  article: {},
};

const handlers = {
  [VIEW_ARTICLE_SET_ARTICLE]: (state, article) => {
    const newArticle = {
      dislikes: article.dislikes,
      likes: article.likes,
      title: article.header,
      name: article.name + ' ' + article.surname,
      text: article.text,
      userId: article.userId,
      photos: article.imagesUrl,
      photo: article.photoSmall,
    };
    return {
      ...state,
      article: newArticle,
    };
  },
  [CLEAR]: () => defaultState,
  DEFAULT: state => state,
};

const reducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default reducer;
