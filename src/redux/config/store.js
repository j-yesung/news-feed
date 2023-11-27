import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import login from 'redux/modules/login';
import contents from 'redux/modules/content';
import signup from 'redux/modules/signup';
import user from 'redux/modules/user';
import comment from 'redux/modules/comment';
import themeReducer from 'redux/modules/dark';
import navbar from 'redux/modules/navbar';

const rootReducer = combineReducers({
  login,
  contents,
  signup,
  user,
  comment,
  themeReducer,
  navbar,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
