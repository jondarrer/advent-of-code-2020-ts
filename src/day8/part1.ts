import { Instruction } from './instruction';

const part1 = (instructions: Array<Instruction>): number => {
  const lines = [];
  let accumulator = 0;
  let line = 0;

  while (!lines.includes(line)) {
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

  return accumulator;
};

export default part1;
