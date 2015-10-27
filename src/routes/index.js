import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Dashboard from './dashboard/Dashboard';
import Movement from './dashboard/Movement';

const routes = (
  <Route path="/" component={App}>
    <Route path="login" component={Login}/>
    <Route path="signup" component={Signup}/>
    <Route path="dashboard" component={Dashboard}>
      <Route path="movement" component={Movement}/>
    </Route>
  </Route>
);

export default routes;
