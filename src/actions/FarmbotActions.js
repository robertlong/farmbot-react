import Farmbot from '../api/Farmbot';

export const AUTH_LOGIN = 'AUTH_LOGIN';

export function loginStart() {
  return {
    type: AUTH_LOGIN,
    payload: undefined,
    sequence: {
      type: 'start',
    },
  };
}

export function loginError(err) {
  return {
    type: AUTH_LOGIN,
    payload: err,
    error: true,
    sequence: {
      type: 'error',
    },
  };
}

export function loginComplete(token) {
  return {
    type: AUTH_LOGIN,
    payload: {
      token,
    },
    sequence: {
      type: 'complete',
    },
  };
}

export function login(username, password) {
  return dispatch => {
    dispatch(loginStart());

    return Farmbot.login(username, password).then(
      (token) => dispatch(loginComplete(token)),
      (err) => dispatch(loginError(err))
    );
  };
}
