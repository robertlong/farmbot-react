import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}
