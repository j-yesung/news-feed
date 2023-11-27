const SET_USER = 'user/SET_USER';

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

const initialState = {
  user: null,
  imagesPath: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default user;
