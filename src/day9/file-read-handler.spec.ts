import fileReadHandler from './file-read-handler';

describe('day9/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = [
      '35',
      '20',
      '15',
      '25',
      '47',
      '40',
      '62',
      '55',
      '65',
      '95',
      '102',
      '117',
      '150',
      '182',
      '127',
      '219',
      '299',
      '277',
      '309',
      '576',
    ];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
      127,
      219,
      299,
      277,
      309,
      576,
    ]);
  });
});
