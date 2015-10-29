import { AUTH_LOGIN } from '../actions/FarmbotActions';

const initialState = {
  authenticated: false,
};

export function authReducer(state = initialState, action) {
  if (action.type === AUTH_LOGIN
      && action.sequence && action.sequence === 'complete') {

    return {
      authenticated: true,
    };
  }

  return state;
}
