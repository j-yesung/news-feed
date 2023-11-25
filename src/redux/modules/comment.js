const GET_COMMENT = 'comment/GET_COMMENT';
const ADD_COMMENT = 'comment/ADD_COMMENT';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';

export const setComment = comment => {
  return {
    type: GET_COMMENT,
    payload: comment,
  };
};
export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};
export const editComment = id => {
  return {
    type: EDIT_COMMENT,
    payload: id,
  };
};
export const updateComment = (id, updateComment) => {
  return {
    type: UPDATE_COMMENT,
    payload: { id, updateComment },
  };
};
export const deleteComment = id => {
  return {
    type: DELETE_COMMENT,
    payload: id,
  };
};

const initialState = {
  comments: [],
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT:
      return { comments: action.payload };
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.payload) {
            console.log(comment);
            return { ...comment, isEditing: true };
          }
          return comment;
        }),
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id ? { ...comment, ...action.payload.updateComment } : comment,
        ),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload),
      };
    default:
      return state;
  }
};

export default comment;
