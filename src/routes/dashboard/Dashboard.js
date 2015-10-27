import React, { Component, PropTypes } from 'react';

export default class Dashboard extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div className="dashboard">
        {this.props.children}
      </div>
    );
  }
}
