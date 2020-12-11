import part1, {
  applyRulesToState,
  seatAtPosition,
  numberOfOccupiedAdjacentSeats,
} from './part1';

const state0 = [
  'L.LL.LL.LL',
  'LLLLLLL.LL',
  'L.L.L..L..',
  'LLLL.LL.LL',
  'L.LL.LL.LL',
  'L.LLLLL.LL',
  '..L.L.....',
  'LLLLLLLLLL',
  'L.LLLLLL.L',
  'L.LLLLL.LL',
];

const state1 = [
  '#.##.##.##',
  '#######.##',
  '#.#.#..#..',
  '####.##.##',
  '#.##.##.##',
  '#.#####.##',
  '..#.#.....',
  '##########',
  '#.######.#',
  '#.#####.##',
];

const state2 = [
  '#.LL.L#.##',
  '#LLLLLL.L#',
  'L.L.L..L..',
  '#LLL.LL.L#',
  '#.LL.LL.LL',
  '#.LLLL#.##',
  '..L.L.....',
  '#LLLLLLLL#',
  '#.LLLLLL.L',
  '#.#LLLL.##',
];

const state3 = [
  '#.##.L#.##',
  '#L###LL.L#',
  'L.#.#..#..',
  '#L##.##.L#',
  '#.##.LL.LL',
  '#.###L#.##',
  '..#.#.....',
  '#L######L#',
  '#.LL###L.L',
  '#.#L###.##',
];

const state4 = [
  '#.#L.L#.##',
  '#LLL#LL.L#',
  'L.L.L..#..',
  '#LLL.##.L#',
  '#.LL.LL.LL',
  '#.LL#L#.##',
  '..L.L.....',
  '#L#LLLL#L#',
  '#.LLLLLL.L',
  '#.#L#L#.##',
];

const state5 = [
  '#.#L.L#.##',
  '#LLL#LL.L#',
  'L.#.L..#..',
  '#L##.##.L#',
  '#.#L.LL.LL',
  '#.#L#L#.##',
  '..L.L.....',
  '#L#L##L#L#',
  '#.LLLLLL.L',
  '#.#L#L#.##',
];

describe('day11/part1', () => {
  it('should work out how many occupied seats after the state becomes stable', () => {
    expect(part1(state0)).toEqual(37);
  });
});
describe('day11/applyRulesToState', () => {
  it('should apply the rules to state0 to give new state1', () => {
    expect(applyRulesToState(state0)).toEqual(state1);
  });
  it('should apply the rules to state1 to give new state2', () => {
    expect(applyRulesToState(state1)).toEqual(state2);
  });
  it('should apply the rules to state2 to give new state3', () => {
    expect(applyRulesToState(state2)).toEqual(state3);
  });
  it('should apply the rules to state3 to give new state4', () => {
    expect(applyRulesToState(state3)).toEqual(state4);
  });
  it('should apply the rules to state4 to give new state5', () => {
    expect(applyRulesToState(state4)).toEqual(state5);
  });
  it('should apply the rules to state4 to give the same state4', () => {
    expect(applyRulesToState(state5)).toEqual(state5);
  });
});
describe('day11/seatAtPosition', () => {
  it('should apply seatAtPosition 2,0 rules to state0 to give #', () => {
    expect(seatAtPosition(state1, 2, 0)).toEqual('#');
  });
  it('should apply seatAtPosition 3,0 rules to state0 to give #', () => {
    expect(seatAtPosition(state1, 3, 0)).toEqual('#');
  });
  it('should apply seatAtPosition 2,2 rules to state4 to give L', () => {
    expect(seatAtPosition(state4, 2, 2)).toEqual('L');
  });
  it('should apply seatAtPosition 2,3 rules to state4 to give L', () => {
    expect(seatAtPosition(state4, 2, 3)).toEqual('L');
  });
  it('should apply seatAtPosition 3,3 rules to state4 to give L', () => {
    expect(seatAtPosition(state4, 3, 3)).toEqual('L');
  });
});
describe('day11/numberOfOccupiedAdjacentSeats', () => {
  it('should apply numberOfOccupiedAdjacentSeats 2,0 rules to state1', () => {
    expect(numberOfOccupiedAdjacentSeats(state1, 2, 0)).toEqual(4);
  });
  it('should apply numberOfOccupiedAdjacentSeats 3,0 rules to state1', () => {
    expect(numberOfOccupiedAdjacentSeats(state1, 3, 0)).toEqual(4);
  });
  it('should apply numberOfOccupiedAdjacentSeats 3,0 rules to state4', () => {
    expect(numberOfOccupiedAdjacentSeats(state4, 3, 3)).toEqual(0);
  });
  it('should apply numberOfOccupiedAdjacentSeats 2,3 rules to state4', () => {
    expect(numberOfOccupiedAdjacentSeats(state4, 2, 3)).toEqual(0);
  });
});
