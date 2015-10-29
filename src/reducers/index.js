import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { reducer as form } from 'redux-form';
import { authReducer as auth } from './authReducer';

export default combineReducers({
  router,
  form,
  auth,
});
