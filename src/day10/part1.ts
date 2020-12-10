import { DifferenceTotals } from './difference-totals';

const part1 = (input: Array<number>): number => {
  const diffs = calculateDifferences(chainAdapters(input));
  return diffs['1'] * (diffs['3'] + 1);
};

const chainAdapters = (input: Array<number>): Array<number> =>
  input.sort((a, b) => a - b);

const calculateDifferences = (input: Array<number>): DifferenceTotals => {
  const result = {};
  let last = 0;
  for (let i = 0; i < input.length; i++) {
    const diff = input[i] - last;
    if (result[diff] === undefined) {
      result[diff] = 0;
    }
    result[diff] += 1;
    last = input[i];
  }
  return result;
};

export default part1;
export { chainAdapters, calculateDifferences };
