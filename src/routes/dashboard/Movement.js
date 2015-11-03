import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovementControls from '../../components/MovementControls';
import BotPosition from '../../components/BotPosition';
import {
  moveForward,
  moveBackward,
  moveLeft,
  moveRight,
  raise,
  lower,
} from '../../actions/FarmbotActions';

function mapStateToProps(state) {
  return {
    botState: state.bot,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    botActions: bindActionCreators({
      moveForward,
      moveBackward,
      moveLeft,
      moveRight,
      raise,
      lower,
    }, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Movement extends Component {
  static propTypes = {
    botState: PropTypes.object.isRequired,
    botActions: PropTypes.object.isRequired,
  };

  render() {
    const { botActions, botState } = this.props;
    return (
      <div className="movement">
        <MovementControls bot={botActions}/>
        <BotPosition bot={botState}/>
      </div>
    );
  }
}
