import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import login from 'redux/modules/login';
import singup from 'redux/modules/singup';

const rootReducer = combineReducers({
  login,singup
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
