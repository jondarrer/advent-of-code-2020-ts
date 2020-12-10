import part1, { chainAdapters, calculateDifferences } from './part1';

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
  1,
  2,
  3,
  4,
  7, //
  8,
  9,
  10,
  11,
  14, //
  17, //
  18,
  19,
  20,
  23, //
  24,
  25,
  28, //
  31, //
  32,
  33,
  34,
  35,
  38, //
  39,
  42, //
  45, //
  46,
  47,
  48,
  49,
];

describe('day10/part1', () => {
  it('should work out the number of 1-jolt differences multiplied by the number of 3-jolt differences', () => {
    expect(part1(input)).toEqual(220);
  });
});
describe('day10/chainAdapters', () => {
  it('should work out something', () => {
    expect(chainAdapters(input)).toEqual(chainedAdapters);
  });
});
describe('day10/calculateDifferences', () => {
  it('should work out something', () => {
    expect(calculateDifferences(chainedAdapters)).toEqual({
      1: 22,
      3: 9,
    });
  });
});
