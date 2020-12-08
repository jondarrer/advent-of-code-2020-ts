import part2, { attemptExcution } from './part2';

describe('day8/part2', () => {
  it('should work out the result by fixing the bug', () => {
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
    expect(part2(instructions)).toEqual(8);
  });
});
describe('day8/attemptExcution', () => {
  it('should throw an error if there is a bug', () => {
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
    expect(() => attemptExcution(instructions)).toThrow();
  });
  it('should return a result if it executes beyond the last line', () => {
    const instructions = [
      { op: 'nop', arg: 0 },
      { op: 'acc', arg: 1 },
      { op: 'jmp', arg: 4 },
      { op: 'acc', arg: 3 },
      { op: 'jmp', arg: -3 },
      { op: 'acc', arg: -99 },
      { op: 'acc', arg: 1 },
      { op: 'nop', arg: -4 },
      { op: 'acc', arg: 6 },
    ];
    expect(attemptExcution(instructions)).toEqual(8);
  });
});
