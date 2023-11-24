import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import login from 'redux/modules/login';
import contents from 'redux/modules/content';
import signup from 'redux/modules/signup';
import user from 'redux/modules/user';

const rootReducer = combineReducers({
  login,
  contents,
  signup,
  user,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
