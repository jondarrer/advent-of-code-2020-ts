import { areStatesEqual, seatAtPosition } from './part1';

const part2 = (state: Array<string>): number => {
  let oldState = null;
  let newState = state;

  while (!areStatesEqual(oldState, newState)) {
    let tempState = newState;
    newState = applyRulesToState(newState);
    oldState = tempState;
  }

  return newState.reduce(
    (acc, cur) => acc + (cur.match(new RegExp('#', 'g')) || []).length,
    0
  );
};

const applyRulesToState = (state: Array<string>): Array<string> => {
  const result = [];

  for (let i = 0; i < state.length; i++) {
    const row = [];
    for (let j = 0; j < state[i].length; j++) {
      let seatState = state[i].charAt(j);
      switch (seatState) {
        case 'L': // Empty seat
          // Are there any occupied seats which can be seen? If not, occupy it
          if (numberOfOccupiedSeatsWhichCanBeSeen(state, j, i) === 0) {
            seatState = '#';
          }
          break;
        case '#':
          // Are there five or more occupied seats which can be seen? If so, vacate it
          if (numberOfOccupiedSeatsWhichCanBeSeen(state, j, i) >= 5) {
            seatState = 'L';
          }
          break;
      }
      row.push(seatState);
    }
    result.push(row.join(''));
  }

  return result;
};

const numberOfOccupiedSeatsWhichCanBeSeen = (
  state: Array<string>,
  x: number,
  y: number
): number => {
  return (
    (whichSeatCanBeSeenInDirection(state, x, y, -1, -1) === '#' ? 1 : 0) +
    (whichSeatCanBeSeenInDirection(state, x, y, 1, 0) === '#' ? 1 : 0) +
    (whichSeatCanBeSeenInDirection(state, x, y, -1, 1) === '#' ? 1 : 0) +
    (whichSeatCanBeSeenInDirection(state, x, y, 0, -1) === '#' ? 1 : 0) +
    (whichSeatCanBeSeenInDirection(state, x, y, 0, 1) === '#' ? 1 : 0) +
    (whichSeatCanBeSeenInDirection(state, x, y, 1, -1) === '#' ? 1 : 0) +
    (whichSeatCanBeSeenInDirection(state, x, y, -1, 0) === '#' ? 1 : 0) +
    (whichSeatCanBeSeenInDirection(state, x, y, 1, 1) === '#' ? 1 : 0)
  );
};

const whichSeatCanBeSeenInDirection = (
  state: Array<string>,
  x: number,
  y: number,
  dx: number,
  dy: number
): string => {
  let result = '.';
  let i = 1;

  while (result === '.') {
    result = seatAtPosition(state, x + dx * i, y + dy * i);
    i += 1;
  }

  return result;
};

export default part2;
export { applyRulesToState };
