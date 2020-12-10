import part2, { continuousChainsOfOnes } from './part2';

const input = [
  28,
  33,
  18,
  42,
  31,
  14,
  46,
  20,
  48,
  47,
  24,
  23,
  49,
  45,
  19,
  38,
  39,
  11,
  1,
  32,
  25,
  35,
  8,
  17,
  7,
  9,
  4,
  2,
  34,
  10,
  3,
];

const chainedAdapters = [
  1, // 0,1,2,3,4-0,2,3,4-0,3,4-0,1,3,4-0,1,4-0,2,4 = 6
  2,
  3,
  4,
  7, // 4
  8,
  9,
  10,
  11,
  14, // 4
  17, // 17,18,19,20-17,19,20-17,20-17,18,20 = 4
  18,
  19,
  20,
  23, // 3
  24,
  25,
  28, // 2
  31, //
  32,
  33,
  34,
  35,
  38, // 4
  39,
  42, //
  45, //
  46,
  47,
  48,
  49,
]; // 4

describe('day10/part2', () => {
  it('should work out the result', () => {
    expect(part2(input)).toEqual(19208);
  });
});
describe('day10/continuousChainsOfOnes', () => {
  it('should work out something', () => {
    expect(continuousChainsOfOnes(chainedAdapters)).toEqual({
      2: 1,
      3: 1,
      4: 4,
    });
  });
});
