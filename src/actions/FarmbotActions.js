import Farmbot from '../api/Farmbot';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_SIGNUP = 'AUTH_SIGNUP';

export const BOT_MOVE_FORWARD = 'BOT_MOVE_FORWARD';
export const BOT_MOVE_BACKWARD = 'BOT_MOVE_BACKWARD';
export const BOT_MOVE_LEFT = 'BOT_MOVE_LEFT';
export const BOT_MOVE_RIGHT = 'BOT_MOVE_RIGHT';
export const BOT_RAISE = 'BOT_RAISE';
export const BOT_LOWER = 'BOT_LOWER';

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
      (res) => dispatch(loginComplete(res.token)),
      (err) => dispatch(loginError(err))
    );
  };
}

export function logout() {
  return {
    type: AUTH_LOGOUT,
  };
}

export function signupStart() {
  return {
    type: AUTH_SIGNUP,
    payload: undefined,
    sequence: {
      type: 'start',
    },
  };
}

export function signupError(err) {
  return {
    type: AUTH_SIGNUP,
    payload: err,
    error: true,
    sequence: {
      type: 'error',
    },
  };
}

export function signupComplete(token) {
  return {
    type: AUTH_SIGNUP,
    payload: {
      token,
    },
    sequence: {
      type: 'complete',
    },
  };
}

export function signup(email, username, password, passwordConfirmation) {
  return dispatch => {
    dispatch(signupStart());

    return Farmbot.signup(email, username, password, passwordConfirmation).then(
      (res) => dispatch(signupComplete(res.token)),
      (err) => dispatch(signupError(err))
    );
  };
}

export function moveForward() {
  return {
    type: BOT_MOVE_FORWARD,
  };
}

export function moveBackward() {
  return {
    type: BOT_MOVE_BACKWARD,
  };
}

export function moveLeft() {
  return {
    type: BOT_MOVE_LEFT,
  };
}

export function moveRight() {
  return {
    type: BOT_MOVE_RIGHT,
  };
}

export function raise() {
  return {
    type: BOT_RAISE,
  };
}

export function lower() {
  return {
    type: BOT_LOWER,
  };
}
