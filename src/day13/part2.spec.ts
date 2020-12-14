import part2, { calculateOriginFactor } from './part2';

describe('day13/part2', () => {
  it('should work out the result for [7, 13, "x", "x", 59, "x", 31, 19] to be 1068781', () => {
    const input = [-1, [7, 13, 'x', 'x', 59, 'x', 31, 19]];
    expect(part2(input)).toEqual(1068781);
  });
  it('should work out the result for [17, "x", 13, 19] to be 3417', () => {
    const input = [-1, [17, 'x', 13, 19]];
    expect(part2(input)).toEqual(3417);
  });
  it('should work out the result for [67, 7, 59, 61] to be 754018', () => {
    const input = [-1, [67, 7, 59, 61]];
    expect(part2(input)).toEqual(754018);
  });
  it('should work out the result for [67, "x", 7, 59, 61] to be 779210', () => {
    const input = [-1, [67, 'x', 7, 59, 61]];
    expect(part2(input)).toEqual(779210);
  });
  it('should work out the result for [67, 7, "x", 59, 61] to be 1261476', () => {
    const input = [-1, [67, 7, 'x', 59, 61]];
    expect(part2(input)).toEqual(1261476);
  });
  it('should work out the result for [1789, 37, 47, 1889] to be 1202161486', () => {
    const input = [-1, [1789, 37, 47, 1889]];
    expect(part2(input)).toEqual(1202161486);
  });
  it('should work out the result for [3, 5, "x", 7] to be 39', () => {
    const input = [-1, [3, 5, 'x', 7]];
    expect(part2(input)).toEqual(39);
  });
  it('should work out the result for [3, "x", 5, 7] to be 18', () => {
    const input = [-1, [3, 'x', 5, 7]];
    expect(part2(input)).toEqual(18);
  });
  it('should work out the result for [3, 7, "x", 5] to be 18', () => {
    const input = [-1, [3, 7, 'x', 5]];
    expect(part2(input)).toEqual(27);
  });
});
describe('day13/calculateOriginFactor', () => {
  it('should calculate a factor of 3 for origin 3 against other 5 with offset 1', () => {
    expect(calculateOriginFactor(3, 5, 1)).toEqual(3);
  });
  it('should calculate a factor of 1 for origin 3 against other 5 with offset 2', () => {
    expect(calculateOriginFactor(3, 5, 2)).toEqual(1);
  });
  it('should calculate a factor of 4 for origin 3 against other 5 with offset 3', () => {
    expect(calculateOriginFactor(3, 5, 3)).toEqual(4);
  });
  it('should calculate a factor of 2 for origin 3 against other 7 with offset 1', () => {
    expect(calculateOriginFactor(3, 7, 1)).toEqual(2);
  });
  it('should calculate a factor of 4 for origin 3 against other 7 with offset 2', () => {
    expect(calculateOriginFactor(3, 7, 2)).toEqual(4);
  });
  it('should calculate a factor of 6 for origin 3 against other 7 with offset 3', () => {
    expect(calculateOriginFactor(3, 7, 3)).toEqual(6);
  });
  it('should calculate a factor of 6 for origin 17 against other 13 with offset 2', () => {
    expect(calculateOriginFactor(17, 13, 2)).toEqual(6);
  });
  it('should calculate a factor of 11 for origin 17 against other 19 with offset 3', () => {
    expect(calculateOriginFactor(17, 19, 3)).toEqual(11);
  });
});
