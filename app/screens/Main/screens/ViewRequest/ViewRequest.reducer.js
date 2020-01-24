import {
  VIEW_REQUEST_SET_REQUEST,
  VIEW_REQUEST_INCREASE_LIKES,
  VIEW_REQUEST_INCREASE_DISLIKES,
} from './ViewRequest.actions';
import {getReadableType} from '_utils/categoties';
import {CLEAR} from '_screens/Main/Main.actions';

const defaultState = {
  request: {},
};

const handlers = {
  [VIEW_REQUEST_SET_REQUEST]: (state, request) => {
    const newRequest = {
      text: request.about,
      likes: request.likes,
      dislikes: request.dislikes,
      title: request.title,
      type: getReadableType(request.type),
      userId: request.uuidUser,
      location: request.address,
      authorPhoto: request.photoSmall,
      photo: request.path,
      name: request.name + ' ' + request.surname,
    };
    return {
      ...state,
      request: newRequest,
    };
  },
  [VIEW_REQUEST_INCREASE_LIKES]: state => ({
    ...state,
    request: {
      ...state.request,
      likes: state.request.likes + 1,
    },
  }),
  [VIEW_REQUEST_INCREASE_DISLIKES]: state => ({
    ...state,
    request: {
      ...state.request,
      dislikes: state.request.dislikes + 1,
    },
  }),
  [CLEAR]: () => defaultState,
  DEFAULT: state => state,
};

const reducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default reducer;
