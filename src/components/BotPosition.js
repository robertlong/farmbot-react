import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

const styles = {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
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
      <div className="bot-position" style={styles.base}>
        <div>
          <span>X: </span><input disabled value={bot.x}/>
        </div>
        <div>
          <span>Y: </span><input disabled value={bot.y}/>
        </div>
        <div>
          <span>Z: </span><input disabled value={bot.z}/>
        </div>
      </div>
    );
  }
}
