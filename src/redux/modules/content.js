// 게시글 추가
const GET_CONTENTS = 'contents/GET_CONTENTS';
const ADD_CONTENTS = 'contents/ADD_CONTENTS';
const EDIT_CONTENTS = 'contents/EDIT_CONTENTS';
const UPDATE_CONTENTS = 'contents/UPDATE_CONTENTS';
const DELETE_CONTENTS = 'contents/DELETE_CONTENTS';
// 댓글 추가
const ADD_COMMENT = 'contents/ADD_COMMENT';

export const setContents = content => {
  return {
    type: GET_CONTENTS,
    payload: content,
  };
};
export const addContents = content => {
  return {
    type: ADD_CONTENTS,
    payload: content,
  };
};
export const editContents = id => {
  return {
    type: EDIT_CONTENTS,
    payload: id,
  };
};
export const updateContents = (id, updateContents) => {
  return {
    type: UPDATE_CONTENTS,
    payload: { id, updateContents },
  };
};
export const deleteContents = id => {
  return {
    type: DELETE_CONTENTS,
    payload: id,
  };
};

export const addComment = (id, comment) => {
  return {
    type: ADD_COMMENT,
    payload: { id, comment },
  };
};

const initialState = {
  contents: [],
};

const content = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENTS:
      return { contents: action.payload };
    case ADD_CONTENTS:
      return { ...state, contents: [...state.contents, action.payload] };
    case EDIT_CONTENTS:
      return {
        ...state,
        contents: state.contents.map(contents => {
          if (contents.id === action.payload) {
            return {
              ...contents,
              isEditing: !contents.isEditing,
            };
          }
          return contents;
        }),
      };
    case UPDATE_CONTENTS:
      return {
        ...state,
        contents: state.contents.map(contents =>
          contents.id === action.payload.id ? { ...contents, ...action.payload.updateContents } : contents,
        ),
      };
    case DELETE_CONTENTS:
      return {
        ...state,
        contents: state.contents.filter(contents => contents.id !== action.payload),
      };
    case ADD_COMMENT:
      console.log('---> state', state);
      console.log('---> action.payload', action.payload);
      return {
        ...state,
        comment: state.contents.map(comment => {
          if (content.id === action.payload.id) {
            return {
              ...comment,
              ...action.payload.comment,
            };
          }
          return comment;
        }),
      };
    default:
      return state;
  }
};

export default content;
