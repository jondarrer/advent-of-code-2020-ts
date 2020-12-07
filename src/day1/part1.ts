const part1 = (expenseReport: Array<number>): number => {
  const twoNumbers = whichTwoNumbersAddUpTo(expenseReport, 2020);
  return twoNumbers[0] * twoNumbers[1];
};

const whichTwoNumbersAddUpTo = (
  list: Array<number>,
  target: number
): Array<number> => {
  const result: Array<number> = [];

  for (let i = 0; i < list.length - 2; i++) {
    for (let j = i + 1; j < list.length - 1; j++) {
      if (list[i] + list[j] === target) {
        result.push(list[i]);
        result.push(list[j]);
      }
    }
  }

  return result;
};

export default part1;
export { whichTwoNumbersAddUpTo };
