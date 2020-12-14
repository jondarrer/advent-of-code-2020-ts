import fileReadHandler from './file-read-handler';

describe('day14/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = [
      'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
      'mem[8] = 11',
      'mem[7] = 101',
      'mem[8] = 0',
      'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
      'mem[8] = 11',
      'mem[7] = 101',
      'mem[8] = 0',
    ];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      {
        mask: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        writes: [
          { address: 8, value: 11 },
          { address: 7, value: 101 },
          { address: 8, value: 0 },
        ],
      },
      {
        mask: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        writes: [
          { address: 8, value: 11 },
          { address: 7, value: 101 },
          { address: 8, value: 0 },
        ],
      },
    ]);
  });
});
