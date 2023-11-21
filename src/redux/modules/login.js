const USER_LOGIN = 'login/USER_LOGIN';

export const setLogin = (email, password) => {
  return {
    type: USER_LOGIN,
    payload: {
      email,
      password,
    },
  };
};

const initialState = {
  isLogin: false,
  email: '',
  password: '',
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};

export default login;
