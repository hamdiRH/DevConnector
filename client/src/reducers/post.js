import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  DELETE_ACCOUNT,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types";
const InitialState = {
  post: [],
  post: null,
  leading: true,
  error: {}
};
export default function(state = InitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        post: state.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        loading: false,
        post: { ...state.post, comment: payload }
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comment: state.post.comment.filter(comment => comment._id !== payload)
        },
        loading: false
      };
    default:
      return state;
  }
}
