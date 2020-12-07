import part2, { isPasswordValid } from './part2';

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
    expect(part2(input)).toEqual(1);
  });
});
describe('day2/isPasswordValid', () => {
  it('should be valid as position 1 contains a and position 3 does not', () => {
    const policy = {
      min: 1,
      max: 3,
      char: 'a',
    };
    const password = 'abcde';
    expect(isPasswordValid(policy, password)).toBeTruthy();
  });
  it('should be invalid as both position 2 and position 9 contain c', () => {
    const policy = {
      min: 2,
      max: 9,
      char: 'c',
    };
    const password = 'ccccccccc';
    expect(isPasswordValid(policy, password)).toBeFalsy();
  });
  it('should be invalid as neither position 1 nor position 3 contains b', () => {
    const policy = {
      min: 1,
      max: 3,
      char: 'b',
    };
    const password = 'cdefg';
    expect(isPasswordValid(policy, password)).toBeFalsy();
  });
});
