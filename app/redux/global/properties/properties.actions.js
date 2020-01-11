export const GO_TO_AUTH = 'GO_TO_AUTH';
export const goToAuth = () => ({
  type: GO_TO_AUTH,
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = isLoading => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const GO_TO_MAIN = 'GO_TO_MAIN';
export const goToMain = () => ({
  type: GO_TO_MAIN,
});
