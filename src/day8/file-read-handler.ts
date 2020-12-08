import { Instruction } from './instruction';

const fileReadHandler = (
  accumulator: Array<Instruction>,
  line: string
): void => {
  const instruction = line.split(' ');
  accumulator.push({ op: instruction[0], arg: parseInt(instruction[1]) });
};

export default fileReadHandler;
