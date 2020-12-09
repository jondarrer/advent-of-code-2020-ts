import part1, { whichNumbersSumToTarget } from './part1';

describe('day9/part1', () => {
  it('should work out the invalid number with range of 5', () => {
    const input = [
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
      127,
      219,
      299,
      277,
      309,
      576,
    ];
    expect(part1(input, 5)).toEqual(127);
  });
});
describe('day9/whichNumbersSumToTarget', () => {
  it('should work out that 40 is the sum of 15 and 25 from the provided nums', () => {
    const nums = [35, 20, 15, 25, 47];
    expect(whichNumbersSumToTarget(nums, 40)).toEqual([15, 25]);
  });
  it('should work out that 127 is not the sum of any of the provided nums', () => {
    const nums = [95, 102, 117, 150, 182];
    expect(whichNumbersSumToTarget(nums, 127)).toBeNull();
  });
});
