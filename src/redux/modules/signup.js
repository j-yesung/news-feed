const ADD_NAME = 'signup/ADD_NAME';
const ADD_EMAIL = 'signup/ADD_EMAIL';
const ADD_PW = 'signup/ADD_PW';
const ADD_TWICEPW = 'signup/ADD_TWICEPW';

export const addName = payload => {
  return { type: ADD_NAME, payload };
};
export const addEmail = payload => {
  return { type: ADD_EMAIL, payload };
};
export const addPw = payload => {
  return { type: ADD_PW, payload };
};
export const addTpw = payload => {
  return { type: ADD_TWICEPW, payload };
};

const initialState = {
  nickname: '',
  email: '',
  password: '',
  tPassword: '',
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      const plusName = action.payload;
      return { ...state, nickname: plusName };

    case ADD_EMAIL:
      const plusEmail = action.payload;
      return { ...state, email: plusEmail };

    case ADD_PW:
      const plusPw = action.payload;
      return { ...state, password: plusPw };

    case ADD_TWICEPW:
      const tPwName = action.payload;
      return { ...state, tPassword: tPwName };

    default:
      return state;
  }
};

export default signup;
