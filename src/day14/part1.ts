import { MaskedWritesInstruction } from './masked-writes-instruction';

const part1 = (instructions: Array<MaskedWritesInstruction>): number => 0;

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
