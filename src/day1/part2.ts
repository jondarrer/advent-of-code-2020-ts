const part2 = (expenseReport: Array<number>): number => {
  const twoNumbers = whichThreeNumbersAddUpTo(expenseReport, 2020);
  return twoNumbers[0] * twoNumbers[1] * twoNumbers[2];
};

const whichThreeNumbersAddUpTo = (
  list: Array<number>,
  target: number
): Array<number> => {
  const result: Array<number> = [];

  for (let i = 0; i < list.length - 3; i++) {
    for (let j = i + 1; j < list.length - 2; j++) {
      for (let k = j + 1; k < list.length - 1; k++) {
        if (list[i] + list[j] + list[k] === target) {
          result.push(list[i]);
          result.push(list[j]);
          result.push(list[k]);
        }
      }
    }
  }

  return result;
};

export default part2;
export { whichThreeNumbersAddUpTo };
