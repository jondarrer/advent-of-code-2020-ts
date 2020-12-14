import { MaskedWritesInstruction } from './masked-writes-instruction';
import { padValue } from './part1';

const part2 = (instructions: Array<MaskedWritesInstruction>): number => {
  const memory = {};

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];

    for (let j = 0; j < instruction.writes.length; j++) {
      const write = instruction.writes[j];
      const addresses = getAllPossibleAddressPermutations(
        applyMaskToAddress(
          instruction.mask,
          padValue(write.address.toString(2), instruction.mask.length, '0')
        )
      );
      for (let k = 0; k < addresses.length; k++) {
        memory[parseInt(addresses[k], 2)] = write.value;
      }
    }
  }

  return countMemory(memory);
};

const applyMaskToAddress = (mask: string, address: string): string => {
  let result = [];

  for (let i = 0; i < mask.length; i++) {
    const char = mask[i];
    if (char !== '0') {
      result[i] = char;
    } else {
      result[i] = address.charAt(i);
    }
  }

  return result.join('');
};

const getAllPossibleAddressPermutations = (address: string): Array<string> => {
  const result = [];
  const indexes = [];
  const noOfXs = (address.match(new RegExp('X', 'g')) || []).length;

  if (noOfXs === 0) {
    return [address];
  }

  let lastIndexOfX = -1;
  for (let i = 0; i < noOfXs; i++) {
    const index = address.indexOf('X', lastIndexOfX + 1);
    indexes.push(index);
    lastIndexOfX = index;
  }

  for (let i = 0; i < 2 ** noOfXs; i++) {
    const binary = padValue(i.toString(2), noOfXs, '0');
    let temp = address;
    for (let j = 0; j < noOfXs; j++) {
      temp =
        temp.substr(0, indexes[j]) +
        binary.charAt(j) +
        temp.substr(indexes[j] + 1);
    }
    result.push(temp);
  }

  return result;
};

const countMemory = (memory: any): number => {
  let result = 0;

  const keys = Object.keys(memory);
  for (let i = 0; i < keys.length; i++) {
    const binary = memory[keys[i]];
    if (binary) {
      result += binary;
    }
  }

  return result;
};

export default part2;
export { applyMaskToAddress, getAllPossibleAddressPermutations };
