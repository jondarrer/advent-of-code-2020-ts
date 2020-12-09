import part2, { whichNumbersSumToTarget } from './part2';

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

describe('day9/part2', () => {
  it('should work out the result', () => {
    expect(part2(input, 127)).toEqual(62);
  });
});
describe('day9/whichNumbersSumToTarget', () => {
  it('should work out something', () => {
    expect(whichNumbersSumToTarget(input, 127)).toEqual([15, 25, 47, 40]);
  });
});
