import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import MovementButton from './MovementButton';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
  },
  spacer: {
    width: 50,
    height: 50,
    margin: 8,
  },
};

@Radium
export default class MovementControls extends Component {
  static propTypes = {
    bot: PropTypes.object.isRequired,
  }

  render() {
    const { bot } = this.props;
    return (
      <div className="movement-controls" style={styles.base}>
        <div style={styles.row}>
          <div style={styles.spacer}/>
          <MovementButton onClick={bot.moveForward} direction="up"/>
          <div style={styles.spacer}/>
          <MovementButton onClick={bot.raise} direction="up"/>
        </div>
        <div style={styles.row}>
          <MovementButton onClick={bot.moveLeft} direction="left"/>
          <MovementButton onClick={bot.moveBackward} direction="down"/>
          <MovementButton onClick={bot.moveRight} direction="right"/>
          <MovementButton onClick={bot.lower} direction="down"/>
        </div>
      </div>
    );
  }
}
