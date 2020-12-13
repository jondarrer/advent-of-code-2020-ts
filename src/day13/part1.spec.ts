import part1, { arrivesAtOrAfter } from './part1';

describe('day13/part1', () => {
  it('should work out the result', () => {
    const input = [939, [7, 13, 'x', 'x', 59, 'x', 31, 19]];
    expect(part1(input)).toEqual(295);
  });
});
describe('day13/arrivesAtOrAfter', () => {
  it('should work out period 7 on or after 939 is 945', () => {
    expect(arrivesAtOrAfter(7, 939)).toEqual(945);
  });
  it('should work out period 13 on or after 939 is 949', () => {
    expect(arrivesAtOrAfter(13, 939)).toEqual(949);
  });
  it('should work out period 59 on or after 939 is 944', () => {
    expect(arrivesAtOrAfter(59, 939)).toEqual(944);
  });
  it('should work out period 31 on or after 939 is 961', () => {
    expect(arrivesAtOrAfter(31, 939)).toEqual(961);
  });
  it('should work out period 31 on or after 939 is 950', () => {
    expect(arrivesAtOrAfter(31, 939)).toEqual(950);
  });
});
