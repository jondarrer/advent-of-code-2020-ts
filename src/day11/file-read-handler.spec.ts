import fileReadHandler from './file-read-handler';

describe('day11/file-read-handler', () => {
  it('should read in strings and return them as strings', () => {
    const lines = [
      '#.##.##.##',
      '#######.##',
      '#.#.#..#..',
      '####.##.##',
      '#.##.##.##',
      '#.#####.##',
    ];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      '#.##.##.##',
      '#######.##',
      '#.#.#..#..',
      '####.##.##',
      '#.##.##.##',
      '#.#####.##',
    ]);
  });
});
