const UPDATE_CATEGORY1 = '/navbar/UPDATE_CATEGORY1';
const UPDATE_CATEGORY2 = '/navbar/UPDATE_CATEGORY2';

export const setcategory1 = payload => {
  return { type: UPDATE_CATEGORY1, payload };
};
export const setcategory2 = payload => {
  return { type: UPDATE_CATEGORY2, payload };
};

const initialState = {
  category1: 'default',
  // category2: 'default',
};

const navbar = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY1:
      return { ...state, category1: action.payload };

    case UPDATE_CATEGORY2:
      return { ...state, category2: action.payload };

    default:
      return state;
  }
};

export default navbar;
