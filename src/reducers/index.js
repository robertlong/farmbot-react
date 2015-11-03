import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { reducer as form } from 'redux-form';
import { authReducer as auth } from './authReducer';
import { botReducer as bot } from './botReducer';

export default combineReducers({
  router,
  form,
  auth,
  bot,
});
