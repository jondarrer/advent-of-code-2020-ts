import part2, { applyRulesToState } from './part2';

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
  '#.LL.LL.L#',
  '#LLLLLL.LL',
  'L.L.L..L..',
  'LLLL.LL.LL',
  'L.LL.LL.LL',
  'L.LLLLL.LL',
  '..L.L.....',
  'LLLLLLLLL#',
  '#.LLLLLL.L',
  '#.LLLLL.L#',
];

const state3 = [
  '#.L#.##.L#',
  '#L#####.LL',
  'L.#.#..#..',
  '##L#.##.##',
  '#.##.#L.##',
  '#.#####.#L',
  '..#.#.....',
  'LLL####LL#',
  '#.L#####.L',
  '#.L####.L#',
];

const state4 = [
  '#.L#.L#.L#',
  '#LLLLLL.LL',
  'L.L.L..#..',
  '##LL.LL.L#',
  'L.LL.LL.L#',
  '#.LLLLL.LL',
  '..L.L.....',
  'LLLLLLLLL#',
  '#.LLLLL#.L',
  '#.L#LL#.L#',
];

const state5 = [
  '#.L#.L#.L#',
  '#LLLLLL.LL',
  'L.L.L..#..',
  '##L#.#L.L#',
  'L.L#.#L.L#',
  '#.L####.LL',
  '..#.#.....',
  'LLL###LLL#',
  '#.LLLLL#.L',
  '#.L#LL#.L#',
];

const state6 = [
  '#.L#.L#.L#',
  '#LLLLLL.LL',
  'L.L.L..#..',
  '##L#.#L.L#',
  'L.L#.LL.L#',
  '#.LLLL#.LL',
  '..#.L.....',
  'LLL###LLL#',
  '#.LLLLL#.L',
  '#.L#LL#.L#',
];

describe('day11/part1', () => {
  it('should work out how many occupied seats after the state becomes stable', () => {
    expect(part2(state0)).toEqual(26);
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

  it('should apply the rules to state5 to give new state6', () => {
    expect(applyRulesToState(state5)).toEqual(state6);
  });
  it('should apply the rules to state6 to give the same state6', () => {
    expect(applyRulesToState(state6)).toEqual(state6);
  });
});
