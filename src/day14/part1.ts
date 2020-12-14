import { MaskedWritesInstruction } from './masked-writes-instruction';

const part1 = (instructions: Array<MaskedWritesInstruction>): number => {
  const memory = [];

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];

    for (let j = 0; j < instruction.writes.length; j++) {
      const write = instruction.writes[j];
      memory[write.address] = applyMaskToValue(
        instruction.mask,
        padValue(write.value, instruction.mask.length, '0')
      );
    }
  }

  return 0;
};

const applyMaskToValue = (mask: string, value: string): string => {
  let result = [];

  for (let i = 0; i < mask.length; i++) {
    const char = mask[i];
    if (char !== 'X') {
      result[i] = char;
    } else {
      result[i] = value.charAt(i);
    }
  }

  return result.join('');
};

const padValue = (value: string, length: number, char: string): string =>
  value.padStart(length, char);

export default part1;
export { applyMaskToValue, padValue };
