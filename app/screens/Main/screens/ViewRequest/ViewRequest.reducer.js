import {SET_REQUEST} from './ViewRequest.actions';
import {getReadableType} from '_utils/categoties';

const defaultState = {
  request: {},
};

const handlers = {
  [SET_REQUEST]: (state, request) => {
    const newRequest = {
      text: request.about,
      likes: request.likes,
      dislikes: request.dislikes,
      title: request.name,
      type: getReadableType(request.type),
      userId: request.uuidUser,
      location: request.location.longitude + ' ' + request.location.latitude,
    };
    return {
      ...state,
      request: newRequest,
    };
  },
  DEFAULT: state => state,
};

const reducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default reducer;
