import { pushState } from 'redux-router';

export function navigateNextPath(defaultRoute) {
  return (dispatch, getState) => {
    const router = getState().router;

    if (router.nextPath) {
      dispatch(pushState(null, router.nextPath));
    } else if (defaultRoute) {
      dispatch(pushState(null, defaultRoute));
    }
  };
}

export function navigateNextPathOrDashboard() {
  return navigateNextPath('/');
}

export function navigateLogin(nextState) {
  return pushState(nextState, '/login');
}

export function navigateDashboard() {
  return pushState(null, '/');
}
