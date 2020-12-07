import part1, { isPasswordValid } from './part1';

describe('day2/part1', () => {
  it('should work out the result', () => {
    const input = [];
    expect(part1(input)).toEqual(0);
  });
});
describe('day2/isPasswordValid', () => {
  it('should be valid according to the policy', () => {
    const policy = {
      min: 1,
      max: 3,
      char: 'a',
    };
    const password = 'abcde';
    expect(isPasswordValid(policy, password)).toBeTruthy();
  });
  it('should be invalid according to the policy', () => {
    const policy = {
      min: 1,
      max: 3,
      char: 'b',
    };
    const password = 'cdefg';
    expect(isPasswordValid(policy, password)).toBeFalsy();
  });
});
