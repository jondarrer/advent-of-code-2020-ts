const part1 = (input: Array<number>): number => {
  const numbers: Array<Numbers> = [];
  const noOfNums = 100000;
  let grouping;

  for (let i = 0; i < input.length - 1; i++) {
    grouping = Math.floor(input[i] / noOfNums);
    if (!numbers[grouping]) {
      numbers[grouping] = {};
    }
    numbers[grouping][input[i]] = i;
  }

  let i = input.length - 1;
  let lastNumber = input[input.length - 1];
  let next;
  while (i < 30000000 - 1) {
    grouping = Math.floor(lastNumber / noOfNums);
    if (!numbers[grouping]) {
      numbers[grouping] = {};
    }
    next = nextNumber(numbers[grouping], lastNumber, i);
    numbers[grouping][lastNumber] = i;
    lastNumber = next;
    i += 1;
  }

  return lastNumber;
};

type Numbers = { [key: string]: number };

const nextNumber = (
  numbers: Numbers,
  lastNumber: number,
  index: number
): number => {
  const lastNumberIndex = numbers[lastNumber];
  return lastNumberIndex !== undefined ? index - lastNumberIndex : 0;
};

export default part1;
export { nextNumber };
