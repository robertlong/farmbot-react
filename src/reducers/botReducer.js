import {
  BOT_MOVE_FORWARD,
  BOT_MOVE_BACKWARD,
  BOT_MOVE_LEFT,
  BOT_MOVE_RIGHT,
  BOT_RAISE,
  BOT_LOWER,
} from '../actions/FarmbotActions';

const X_MAX = 128;
const Y_MAX = 128;
const Z_MAX = 128;

const initialState = {
  x: 0,
  y: 0,
  z: 0,
};

export function botReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
  case BOT_MOVE_FORWARD:
    return {
      ...state,
      y: (state.y + 1 < Y_MAX ? state.y + 1 : Y_MAX),
    };
  case BOT_MOVE_BACKWARD:
    return {
      ...state,
      y: (state.y - 1 >= 0 ? state.y - 1 : 0),
    };
  case BOT_MOVE_RIGHT:
    return {
      ...state,
      x: (state.x + 1 < X_MAX ? state.x + 1 : X_MAX),
    };
  case BOT_MOVE_LEFT:
    return {
      ...state,
      x: (state.x - 1 >= 0 ? state.x - 1 : 0),
    };
  case BOT_RAISE:
    return {
      ...state,
      z: (state.z + 1 < Z_MAX ? state.z + 1 : Z_MAX),
    };
  case BOT_LOWER:
    return {
      ...state,
      z: (state.z - 1 >= 0 ? state.z - 1 : 0),
    };
  default:
    return state;
  }
}
