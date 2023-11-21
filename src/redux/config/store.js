import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import login from './login';

const rootReducer = combineReducers({
  login,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
