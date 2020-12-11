const part1 = (state: Array<string>): number => {
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

const areStatesEqual = (a: Array<string>, b: Array<string>): boolean => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const applyRulesToState = (state: Array<string>): Array<string> => {
  const result = [];

  for (let i = 0; i < state.length; i++) {
    const row = [];
    for (let j = 0; j < state[i].length; j++) {
      let seatState = state[i].charAt(j);
      switch (seatState) {
        case 'L': // Empty seat
          // Are there any occupied seats immediately adjacent?
          if (numberOfOccupiedAdjacentSeats(state, j, i) === 0) {
            seatState = '#';
          }
          break;
        case '#':
          // Are there four or more adjacent seats which are occupied? If so, vacate it
          if (numberOfOccupiedAdjacentSeats(state, j, i) >= 4) {
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

const numberOfOccupiedAdjacentSeats = (
  state: Array<string>,
  x: number,
  y: number
): number => {
  return (
    (seatAtPosition(state, x - 1, y - 1) === '#' ? 1 : 0) +
    (seatAtPosition(state, x - 1, y) === '#' ? 1 : 0) +
    (seatAtPosition(state, x - 1, y + 1) === '#' ? 1 : 0) +
    (seatAtPosition(state, x, y - 1) === '#' ? 1 : 0) +
    (seatAtPosition(state, x, y + 1) === '#' ? 1 : 0) +
    (seatAtPosition(state, x + 1, y - 1) === '#' ? 1 : 0) +
    (seatAtPosition(state, x + 1, y) === '#' ? 1 : 0) +
    (seatAtPosition(state, x + 1, y + 1) === '#' ? 1 : 0)
  );
};

const seatAtPosition = (state: Array<string>, x: number, y: number): string => {
  if (y < 0 || y >= state.length || x < 0 || x >= state[y].length) {
    return ' ';
  }
  return state[y].charAt(x);
};

export default part1;
export { applyRulesToState, numberOfOccupiedAdjacentSeats, seatAtPosition };
