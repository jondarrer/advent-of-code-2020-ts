import { Instruction } from './instruction';

const fileReadHandler = (
  accumulator: Array<Instruction>,
  line: string
): void => {
  accumulator.push({ op: '', arg: 0 });
};

export default fileReadHandler;
