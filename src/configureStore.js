import { compose, createStore } from 'redux';
import { devTools } from 'redux-devtools';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import middleware from './middleware';
import { getRoutes } from './routes';
import reducers from './reducers';

export default function configureStore() {
  const router = reduxReactRouter({ getRoutes, createHistory });

  return compose(
    middleware,
    router,
    devTools(),
  )(createStore)(reducers);
}
