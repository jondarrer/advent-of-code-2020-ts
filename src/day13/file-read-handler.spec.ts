import fileReadHandler from './file-read-handler';

describe('day13/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = ['939', '7,13,x,x,59,x,31,19'];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([939, [7, 13, 'x', 'x', 59, 'x', 31, 19]]);
  });
});
