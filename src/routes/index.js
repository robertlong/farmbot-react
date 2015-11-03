import React from 'react';
import { IndexRedirect, IndexRoute, Route } from 'react-router';
import App from './App';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Dashboard from './dashboard/Dashboard';
import Movement from './dashboard/Movement';
import { logout } from '../actions/FarmbotActions';

// TODO: remove setTimeout and getState mess.
// Track https://github.com/rackt/redux-router/pull/62
// and https://github.com/rackt/redux-router/issues/61
export function getRoutes(store) {
  console.warn('Errors dealing with ReduxRouterContext Prop/Context types on the first render are currently expected.');

  function requireAuth(nextState, replaceState, cb) {
    setTimeout(() => {
      const { auth } = store.getState();
      if (!auth.authenticated) {
        replaceState({ nextPath: nextState.location.pathname }, '/login');
      }
      cb();
    }, 0);
  }

  function handleLogout(nextState, replaceState, cb) {
    setTimeout(() => {
      store.dispatch(logout());
      replaceState(null, '/login');
      cb();
    }, 0);
  }

  return (
    <Route path="/" component={App}>
      <Route path="login" component={Login}/>
      <Route path="signup" component={Signup}/>
      <Route path="logout" onEnter={handleLogout}/>
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth}>
        <Route path="movement" component={Movement}/>
        <IndexRoute component={Movement} onEnter={requireAuth}/>
      </Route>
      <IndexRedirect to="dashboard"/>
    </Route>
  );
}
