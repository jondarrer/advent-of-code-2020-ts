import part2, { whichThreeNumbersAddUpTo } from './part2';

describe('day1/part1', () => {
  it('should work out which of the two numbers added together equals 2020 and return the product of the two', () => {
    const input = [1721, 979, 366, 299, 675, 1456];
    expect(part2(input)).toEqual(241861950);
  });
  it('should work out which of the two numbers added together equals 2020', () => {
    const input = [1721, 979, 366, 299, 675, 1456];
    expect(whichThreeNumbersAddUpTo(input, 2020)).toEqual([979, 366, 675]);
  });
});
