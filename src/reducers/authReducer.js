import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SIGNUP,
} from '../actions/FarmbotActions';

const initialState = {
  token: null,
  authenticated: false,
};

export function authReducer(state = initialState, action) {
  if ((action.type === AUTH_LOGIN || AUTH_SIGNUP)
      && action.sequence && action.sequence.type === 'complete') {

    return {
      ...state,
      token: action.payload.token,
      authenticated: true,
    };
  } else if (action.type === AUTH_LOGOUT) {
    return initialState;
  }

  return state;
}
