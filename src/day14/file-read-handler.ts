import { MaskedWritesInstruction } from './masked-writes-instruction';
import { WriteInstruction } from './write-instruction';

const writeRegex = new RegExp(/mem\[(?<address>\d+)] = (?<value>\d+)/); // https://regex101.com/r/qH79cM/1

const fileReadHandler = (
  accumulator: Array<MaskedWritesInstruction>,
  line: string
): void => {
  if (line.startsWith('mask = ')) {
    accumulator.push({ mask: line.substr(7), writes: [] });
  } else {
    const groups = writeRegex.exec(line).groups;
    accumulator[accumulator.length - 1].writes.push({
      address: parseInt(groups.address),
      value: parseInt(groups.value),
    });
  }
};

export default fileReadHandler;
