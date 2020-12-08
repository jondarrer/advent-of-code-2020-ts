import { Instruction } from './instruction';

const part2 = (instructions: Array<Instruction>): number => {
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (['nop', 'jmp'].includes(instruction.op)) {
      const originalOp = instruction.op;
      instruction.op = originalOp === 'nop' ? 'jmp' : 'nop';
      try {
        const result = attemptExcution(instructions);
        return result;
      } catch (e) {
        instruction.op = originalOp;
      }
    }
  }
};

const attemptExcution = (instructions: Array<Instruction>): number => {
  const lines = [];
  let accumulator = 0;
  let line = 0;

  while (!lines.includes(line)) {
    if (line >= instructions.length) {
      break;
    }
    lines.push(line);
    const instruction = instructions[line];
    switch (instruction.op) {
      case 'jmp':
        line += instruction.arg;
        break;
      case 'acc':
        accumulator += instruction.arg;
      default:
        line += 1;
    }
  }

  if (line < instructions.length - 1) {
    throw new Error('There appears to be a bug in the code');
  }

  return accumulator;
};

export default part2;
export { attemptExcution };
