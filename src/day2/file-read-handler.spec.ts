import fileReadHandler from './file-read-handler';

describe('day2/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
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
          min: 1,
          max: 3,
          char: 'b',
        },
        password: 'cdefg',
      },
      {
        policy: {
          min: 2,
          max: 9,
          char: 'c',
        },
        password: 'ccccccccc',
      },
    ]);
  });
});
