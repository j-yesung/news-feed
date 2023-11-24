const SET_USER = 'user/SET_USER';
const SET_USER_IMAGES = 'user/SET_USER_IMAGES';

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const setUserImages = imagesPath => ({
  type: SET_USER_IMAGES,
  payload: imagesPath,
});

const initialState = {
  user: null,
  imagesPath: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USER_IMAGES:
      return { ...state, imagesPath: action.payload };
    default:
      return state;
  }
};

export default user;
