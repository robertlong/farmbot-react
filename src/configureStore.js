import { compose, createStore } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import routes from './routes';
import reducers from './reducers';

export default function configureStore() {
  const router = reduxReactRouter({ routes, createHistory });

  return compose(router)(createStore)(reducers);
}
