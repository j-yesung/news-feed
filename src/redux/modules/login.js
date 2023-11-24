//TYPE 설정
const USER_LOGIN = 'login/USER_LOGIN';
const USER_LOGOUT = 'login/USER_LOGOUT';

//ACTION_CREATOR 생성
export const setLogin = payload => {
  return { type: USER_LOGIN, payload };
};
export const setLogout = payload => {
  return { type: USER_LOGOUT, payload };
};

const initialState = {
  email: '',
  password: '',
  nickName: '',
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        nickName: action.payload.nickName,
      };
    case USER_LOGOUT:
      return { ...state, email: '', password: '', nickName: '' };
    default:
      return state;
  }
};

export default login;
