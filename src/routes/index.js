import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Dashboard from './dashboard/Dashboard';
import Movement from './dashboard/Movement';
import { navigateLogin, navigateDashboard } from '../actions/RouterActions';

// TODO: remove setTimeout and getState mess.
// Track https://github.com/rackt/redux-router/pull/62
// and https://github.com/rackt/redux-router/issues/61
export function getRoutes(store) {
  console.warn('Errors dealing with ReduxRouterContext Prop/Context types on the first render are currently expected.');

  function redirectRoot(nextState, replaceState, cb) {
    setTimeout(() => {
      const { auth } = store.getState();

      if (auth.authenticated) {
        store.dispatch(navigateDashboard());
      } else {
        store.dispatch(navigateLogin());
      }
      cb();
    }, 0);
  }

  function requireAuth(nextState, replaceState, cb) {
    setTimeout(() => {
      const { auth } = store.getState();
      if (auth.authenticated) {
        store.dispatch(navigateLogin({ nextPath: nextState.location.pathname }));
      }
      cb();
    }, 0);
  }

  return (
    <Route path="/" component={App} onEnter={redirectRoot}>
      <Route path="login" component={Login}/>
      <Route path="signup" component={Signup}/>
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth}>
        <Route path="movement" component={Movement}/>
      </Route>
    </Route>
  );
}
