const THEME_MODE = 'dark/IS_MODE';

export const setThemeMode = mode => {
  return {
    type: THEME_MODE,
    payload: mode,
  };
};

const initialState = {
  isMode: null,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_MODE:
      return {
        ...state,
        isMode: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
