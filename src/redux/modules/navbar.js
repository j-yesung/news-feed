const UPDATE_CATEGORY = '/navbar/UPDATE_CATEGORY';

export const setcategory = payload => {
  return { type: UPDATE_CATEGORY, payload };
};

const initialState = {
  category: 'default',
};

const navbar = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

export default navbar;
