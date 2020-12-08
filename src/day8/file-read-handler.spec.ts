import fileReadHandler from './file-read-handler';

describe('day8/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = [
      'nop +0',
      'acc +1',
      'jmp +4',
      'acc +3',
      'jmp -3',
      'acc -99',
      'acc +1',
      'jmp -4',
      'acc +6',
    ];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      { op: 'nop', arg: 0 },
      { op: 'acc', arg: 1 },
      { op: 'jmp', arg: 4 },
      { op: 'acc', arg: 3 },
      { op: 'jmp', arg: -3 },
      { op: 'acc', arg: -99 },
      { op: 'acc', arg: 1 },
      { op: 'jmp', arg: -4 },
      { op: 'acc', arg: 6 },
    ]);
  });
});
