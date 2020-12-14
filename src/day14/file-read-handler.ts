import { MaskedWritesInstruction } from './masked-writes-instruction';

const fileReadHandler = (
  accumulator: Array<MaskedWritesInstruction>,
  line: string
): void => {
  accumulator.push(null);
};

export default fileReadHandler;
