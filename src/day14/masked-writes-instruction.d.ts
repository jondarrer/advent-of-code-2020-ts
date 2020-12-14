import { WriteInstruction } from './write-instruction';

export type MaskedWritesInstruction = {
  mask: string;
  writes: Array<WriteInstruction>;
};
