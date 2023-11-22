const GET_CONTENTS = 'contents/GET_CONTENTS';
export const setContents = content => {
  return {
    type: GET_CONTENTS,
    payload: content,
  };
};
const initialState = [];
const contents = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENTS:
      return action.payload;
    default:
      return state;
  }
};
export default contents;
