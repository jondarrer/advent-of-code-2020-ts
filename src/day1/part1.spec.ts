import part1 from './part1';

describe('day1/part1', () => {
  it('should work out which of the two numbers added together equals 2020 and return the product of the two', () => {
    const input = [1721, 979, 366, 299, 675, 1456];
    expect(part1(input)).toEqual(514579);
  });
});
