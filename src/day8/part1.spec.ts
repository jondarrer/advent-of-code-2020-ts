import part1 from './part1';

describe('day8/part1', () => {
  it('should work out the result', () => {
    const instructions = [
      { op: 'nop', arg: 0 },
      { op: 'acc', arg: 1 },
      { op: 'jmp', arg: 4 },
      { op: 'acc', arg: 3 },
      { op: 'jmp', arg: -3 },
      { op: 'acc', arg: -99 },
      { op: 'acc', arg: 1 },
      { op: 'jmp', arg: -4 },
      { op: 'acc', arg: 6 },
    ];
    expect(part1(instructions)).toEqual(5);
  });
});
