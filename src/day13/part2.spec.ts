import part2 from './part2';

describe('day13/part2', () => {
  it('should work out the result for [7, 13, "x", "x", 59, "x", 31, 19] to be 1068781', () => {
    const input = [939, [7, 13, 'x', 'x', 59, 'x', 31, 19]];
    expect(part2(input)).toEqual(1068781);
  });
  it('should work out the result for [17, "x", 13, 19] to be 3417', () => {
    const input = [939, [17, 'x', 13, 19]];
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
    const input = [939, [1789, 37, 47, 1889]];
    expect(part2(input)).toEqual(1202161486);
  });
});
