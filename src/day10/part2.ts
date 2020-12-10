import { DifferenceTotals } from './difference-totals';
import { chainAdapters } from './part1';

const part2 = (input: Array<number>): number => {
  const continuous1s = continuousChainsOfOnes(chainAdapters(input));
  return (
    2 ** continuous1s['2'] * 4 ** continuous1s['3'] * 7 ** continuous1s['4']
  );
};

const continuousChainsOfOnes = (
  chainedAdapters: Array<number>
): DifferenceTotals => {
  const result = {};
  let last = 0;
  let continuous = 0;
  for (let i = 0; i < chainedAdapters.length; i++) {
    const diff = chainedAdapters[i] - last;
    if (diff === 1) {
      continuous += 1;
    } else {
      if (continuous > 1) {
        if (result[continuous] === undefined) {
          result[continuous] = 0;
        }
        result[continuous] += 1;
      }
      continuous = 0;
    }
    last = chainedAdapters[i];
  }
  if (continuous > 1) {
    if (result[continuous] === undefined) {
      result[continuous] = 0;
    }
    result[continuous] += 1;
    continuous = 0;
  }
  return result;
};

export default part2;
export { continuousChainsOfOnes };
