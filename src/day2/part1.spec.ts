import part1, { isPasswordValid } from './part1';

describe('day2/part1', () => {
  it('should work out the result', () => {
    const input = [
      {
        policy: {
          min: 1,
          max: 3,
          char: 'a',
        },
        password: 'abcde',
      },
      {
        policy: {
          min: 2,
          max: 9,
          char: 'c',
        },
        password: 'ccccccccc',
      },
      {
        policy: {
          min: 1,
          max: 3,
          char: 'b',
        },
        password: 'cdefg',
      },
    ];
    expect(part1(input)).toEqual(2);
  });
});
describe('day2/isPasswordValid', () => {
  it('should be valid (min) according to the policy', () => {
    const policy = {
      min: 1,
      max: 3,
      char: 'a',
    };
    const password = 'abcde';
    expect(isPasswordValid(policy, password)).toBeTruthy();
  });
  it('should be valid (max) according to the policy', () => {
    const policy = {
      min: 2,
      max: 9,
      char: 'c',
    };
    const password = 'ccccccccc';
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
