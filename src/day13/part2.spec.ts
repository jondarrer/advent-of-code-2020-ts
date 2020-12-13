import part2, { somethingElse } from './part2';

describe('day13/part2', () => {
  it('should work out the result', () => {
    const input = [];
    expect(part2(input)).toEqual(0);
  });
});
describe('day13/somethingElse', () => {
  it('should work out something', () => {
    const input = 0;
    expect(somethingElse(input)).toEqual(0);
  });
});
