import fileReadHandler from './file-read-handler';

describe('day15/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = ['0,3,6'];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([0, 3, 6]);
  });
});
