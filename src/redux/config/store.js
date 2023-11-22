import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import login from 'redux/modules/login';
import contents from 'redux/modules/contents';

const rootReducer = combineReducers({
  login,
  contents,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
