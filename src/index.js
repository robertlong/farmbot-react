import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './configureStore';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter/>
      </Provider>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
