import {SET_REQUEST} from './ViewRequest.actions';
import {getReadableType} from '_utils/categoties';

const defaultState = {
  request: {},
};

const handlers = {
  [SET_REQUEST]: (state, request) => {
    console.log(request);
    const newRequest = {
      text: request.about,
      likes: request.likes,
      dislikes: request.dislikes,
      title: request.name,
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
  DEFAULT: state => state,
};

const reducer = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};

export default reducer;
