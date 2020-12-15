import part2, { nextNumber } from './part2';

describe.skip('day15/part2', () => {
  // it('should work out the 30,000,000th number starting with 0, 3, 6 to be 175594', () => {
  //   expect(part2([0, 3, 6])).toEqual(175594);
  // });
  // it('should work out the 30,000,000th number starting with 1, 3, 2 to be 2578', () => {
  //   expect(part2([1, 3, 2])).toEqual(2578);
  // });
  // it('should work out the 30,000,000th number starting with 2, 1, 3 to be 3544142', () => {
  //   expect(part2([2, 1, 3])).toEqual(3544142);
  // });
  // it('should work out the 30,000,000th number starting with 1, 2, 3 to be 261214', () => {
  //   expect(part2([1, 2, 3])).toEqual(261214);
  // });
  // it('should work out the 30,000,000th number starting with 2, 3, 1 to be 6895259', () => {
  //   expect(part2([2, 3, 1])).toEqual(6895259);
  // });
  // it('should work out the 30,000,000th number starting with 3, 2, 1 to be 18', () => {
  //   expect(part2([3, 2, 1])).toEqual(18);
  // });
  // it('should work out the 30,000,000th number starting with 3, 1, 2 to be 362', () => {
  //   expect(part2([3, 1, 2])).toEqual(362);
  // });
});
describe('day15/nextNumber', () => {
  it('should work out the next number from 0, 3, 6 to be 0', () => {
    expect(nextNumber({ '0': 0, '3': 1 }, 6, 2)).toEqual(0);
  });
  it('should work out the next number from 0, 3, 6, 0 to be 3', () => {
    expect(nextNumber({ '0': 0, '3': 1, '6': 2 }, 0, 3)).toEqual(3);
  });
  it('should work out the next number from 0, 3, 6, 0, 3 to be 3', () => {
    expect(nextNumber({ '0': 3, '3': 1, '6': 2 }, 3, 4)).toEqual(3);
  });
  it('should work out the next number from 0, 3, 6, 0, 3, 3 to be 1', () => {
    expect(nextNumber({ '0': 3, '3': 4, '6': 2 }, 3, 5)).toEqual(1);
  });
  it('should work out the next number from 0, 3, 6, 0, 3, 3, 1 to be 0', () => {
    expect(nextNumber({ '0': 3, '3': 5, '6': 2 }, 1, 6)).toEqual(0);
  });
  it('should work out the next number from 0, 3, 6, 0, 3, 3, 1, 0 to be 4', () => {
    expect(nextNumber({ '0': 3, '3': 5, '6': 2, '1': 6 }, 0, 7)).toEqual(4);
  });
  it('should work out the next number from 0, 3, 6, 0, 3, 3, 1, 0, 4 to be 0', () => {
    expect(nextNumber({ '0': 7, '3': 5, '6': 2, '1': 6 }, 4, 8)).toEqual(0);
  });
});
