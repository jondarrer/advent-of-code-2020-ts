import part1, { nextNumber } from './part1';

describe('day15/part1', () => {
  it('should work out the 2020th number starting with 0, 3, 6 to be 436', () => {
    expect(part1([0, 3, 6])).toEqual(436);
  });
  it('should work out the 2020th number starting with 1, 3, 2 to be 1', () => {
    expect(part1([1, 3, 2])).toEqual(1);
  });
  it('should work out the 2020th number starting with 2, 1, 3 to be 10', () => {
    expect(part1([2, 1, 3])).toEqual(10);
  });
  it('should work out the 2020th number starting with 1, 2, 3 to be 27', () => {
    expect(part1([1, 2, 3])).toEqual(27);
  });
  it('should work out the 2020th number starting with 2, 3, 1 to be 78', () => {
    expect(part1([2, 3, 1])).toEqual(78);
  });
  it('should work out the 2020th number starting with 3, 2, 1 to be 438', () => {
    expect(part1([3, 2, 1])).toEqual(438);
  });
  it('should work out the 2020th number starting with 3, 1, 2 to be 1836', () => {
    expect(part1([3, 1, 2])).toEqual(1836);
  });
});
describe('day15/nextNumber', () => {
  it('should work out the next number from 0, 3, 6 to be 0', () => {
    expect(nextNumber([0, 3, 6])).toEqual(0);
  });
  it('should work out the next number from 0, 3, 6, 0 to be 3', () => {
    expect(nextNumber([0, 3, 6, 0])).toEqual(3);
  });
  it('should work out the next number from 0, 3, 6, 0, 3 to be 3', () => {
    expect(nextNumber([0, 3, 6, 0, 3])).toEqual(3);
  });
  it('should work out the next number from 0, 3, 6, 0, 3, 3 to be 1', () => {
    expect(nextNumber([0, 3, 6, 0, 3, 3])).toEqual(1);
  });
  it('should work out the next number from 0, 3, 6, 0, 3, 3, 1 to be 0', () => {
    expect(nextNumber([0, 3, 6, 0, 3, 3, 1])).toEqual(0);
  });
  it('should work out the next number from 0, 3, 6, 0, 3, 3, 1, 0 to be 4', () => {
    expect(nextNumber([0, 3, 6, 0, 3, 3, 1, 0])).toEqual(4);
  });
  it('should work out the next number from 0, 3, 6, 0, 3, 3, 1, 0, 4 to be 0', () => {
    expect(nextNumber([0, 3, 6, 0, 3, 3, 1, 0, 4])).toEqual(0);
  });
});
