/*
Run this on: https://gamepad-tester.com/
by opening the console and pasting all the contents.
The run it.
 */

const Direction = {UP: 'u', DOWN: 'd', LEFT: 'l', RIGHT: 'r'}
let useFakeController = false;
const origGetGamepads = navigator.getGamepads.bind(navigator); // how to do this with selenium

const fakeController = {
  axes: [0, 0, 0, 0],
  buttons: [
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
    {
      pressed: false,
      touched: false,
      value: 0,
    },
  ],
  connected: false,
  id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
  index: 0,
  mapping: 'standard',
  timestamp: performance.now(),
  hapticActuators: [],
};

const axeStates= {};

const getAxePosForDirection = (direction) =>
  [Direction.UP, Direction.DOWN].indexOf(direction) > -1 ? 1 : 0;

const getOppositeDirection = (direction) => {
  switch (direction) {
    case Direction.UP:
      return Direction.DOWN;
    case Direction.DOWN:
      return Direction.UP;
    case Direction.LEFT:
      return Direction.RIGHT;
    case Direction.RIGHT:
      return Direction.LEFT;
  }
};
const getValueForDirection = (direction) =>
  [Direction.UP, Direction.LEFT].indexOf(direction) > -1 ? -1 : 1;

function simulateBtnTouch(buttonIndex) {
  fakeController.buttons[buttonIndex].touched = true;
  fakeController.timestamp = performance.now();
}

function simulateBtnPress(buttonIndex) {
  fakeController.buttons[buttonIndex].pressed = true;
  fakeController.buttons[buttonIndex].value = 1;
  fakeController.timestamp = performance.now();
}

function simulateBtnUnpress(buttonIndex) {
  fakeController.buttons[buttonIndex].touched = false;
  fakeController.buttons[buttonIndex].pressed = false;
  fakeController.buttons[buttonIndex].value = 0;
  fakeController.timestamp = performance.now();
}

function simulateAxeDirPress(axe, direction) {
  axeStates[direction] = true;
  const pos = getAxePosForDirection(direction);
  const value = getValueForDirection(direction);
  const oppositeDirection = getOppositeDirection(direction);
  fakeController.axes[axe * 2 + pos] =
    value + (axeStates[oppositeDirection] ? getValueForDirection(oppositeDirection) : 0);
  fakeController.timestamp = performance.now();
}

function simulateAxeDirUnpress(axe, direction) {
  axeStates[direction] = false;
  const pos = getAxePosForDirection(direction);
  const oppositeDirection = getOppositeDirection(direction);
  fakeController.axes[axe * 2 + pos] = axeStates[oppositeDirection] ? getValueForDirection(oppositeDirection) : 0;
  fakeController.timestamp = performance.now();
}

function simulateAxeMove(axe, x, y) {
  fakeController.axes[axe * 2] = x;
  fakeController.axes[axe * 2 + 1] = y;
  fakeController.timestamp = performance.now();
}

function simulateGamepadConnect() {
  const event = new Event('gamepadconnected');
  fakeController.connected = true;
  fakeController.timestamp = performance.now();
  event.gamepad = fakeController;
  window.dispatchEvent(event);
}

function simulateGamepadDisconnect() {
  const event = new Event('gamepaddisconnected');
  fakeController.connected = false;
  fakeController.timestamp = performance.now();
  event.gamepad = fakeController;
  window.dispatchEvent(event);
}

function modifyGamepadGlobals() {
  navigator.getGamepads = function getGamepads() {
    return useFakeController ? [{ ...fakeController }] : origGetGamepads();
  };
}

function enableSimulator(enable) {
  useFakeController = enable;
  if (enable) {
    simulateGamepadConnect();
  } else {
    simulateGamepadDisconnect();
  }
}

function isEnabled() {
  return useFakeController;
}

function resetGamepadGlobals() {
  navigator.getGamepads = origGetGamepads;
}

enableSimulator(true);
modifyGamepadGlobals();
simulateGamepadConnect();
