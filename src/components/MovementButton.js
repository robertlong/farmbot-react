import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Icon from '@grove/react-font-awesome';

const styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#444',
    width: 50,
    height: 50,
    margin: 8,
    borderRadius: 5,
    ':active': {
      transform: 'translateY(2px)',
    },
  },
};

@Radium
export default class MovementButton extends Component {
  static propTypes = {
    onClick: PropTypes.function,
    direction: PropTypes.string.isRequired,
  }

  render() {
    const { direction, onClick } = this.props;
    return (
      <div className="movement-button" style={styles.base} onClick={onClick}>
        <Icon name={`arrow-${direction}`}/>
      </div>
    );
  }
}
