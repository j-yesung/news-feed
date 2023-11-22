const GET_CONTENTS = 'contents/GET_CONTENTS';
export const setContents = content => {
  return {
    type: GET_CONTENTS,
    payload: content,
  };
};
const initialState = [];
export const addContents = content => {
  return {
    type: ADD_CONTENTS,
    payload: content,
  };
};
const contents = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENTS:
      return { ...state, contents: action.payload };
    case ADD_CONTENTS:
      return { ...state, contents: [...state.contents, action.payload] };
    default:
      return state;
  }
};
export default contents;
