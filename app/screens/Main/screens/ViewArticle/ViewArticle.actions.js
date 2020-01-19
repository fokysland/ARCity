import {getArticle} from '_api/article.api';
export const SET_ARTICLE = 'SET_ARTICLE';
export const setArticle = article => ({
  type: SET_ARTICLE,
  payload: article,
});

export const fetchArticle = id => async dispatch => {
  const res = await getArticle(id);
  if (res.ok) {
    console.log(res.body);
    dispatch(setArticle(res.body));
  }
};
