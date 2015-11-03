import React, { Component } from 'react';
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
  render() {
    return (
      <div className="movement-controls" style={styles.base}>
        <div style={styles.row}>
          <div style={styles.spacer}/>
          <MovementButton direction="up"/>
          <div style={styles.spacer}/>
          <MovementButton direction="up"/>
        </div>
        <div style={styles.row}>
          <MovementButton direction="left"/>
          <MovementButton direction="down"/>
          <MovementButton direction="right"/>
          <MovementButton direction="down"/>
        </div>
      </div>
    );
  }
}
