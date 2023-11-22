const GET_CONTENTS = 'contents/GET_CONTENTS';
const ADD_CONTENTS = 'contents/ADD_CONTENTS';
const UPDATE_CONTENTS = 'contents/UPDATE_CONTENTS';
const DELETE_CONTENTS = 'contents/DELETE_CONTENTS';

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
export const updateContents = (id, updateContents) => {
  return {
    type: UPDATE_CONTENTS,
    payload: { id, updateContents },
  };
};
export const deleteContents = contents => {
  return {
    type: DELETE_CONTENTS,
    payload: contents,
  };
};

const initialState = {
  contents: [],
};

const content = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENTS:
      return { ...state, contents: action.payload };
    case ADD_CONTENTS:
      return { ...state, contents: [...state.contents, action.payload] };
    case UPDATE_CONTENTS:
      return {
        ...state,
        contents: state.contents.map(contents =>
          contents.id === action.payload.id ? action.payload.updateContents : contents,
        ),
      };
    case DELETE_CONTENTS:
      return {
        ...state,
        contents: state.contents.filter(contents => contents.id !== action.payload),
      };
    default:
      return state;
  }
};

export default content;
