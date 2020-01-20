import {getArticle} from '_api/article.api';
export const VIEW_ARTICLE_SET_ARTICLE = 'VIEW_ARTICLE_SET_ARTICLE';
export const setArticle = article => ({
  type: VIEW_ARTICLE_SET_ARTICLE,
  payload: article,
});

export const fetchArticle = id => async dispatch => {
  const res = await getArticle(id);
  if (res.ok) {
    dispatch(setArticle(res.body));
  }
};
