const part1 = (input: Array<number>): number => {
  while (input.length < 2020) {
    input.push(nextNumber(input));
  }

  return input[input.length - 1];
};

const nextNumber = (input: Array<number>): number => {
  const lastNumber = input[input.length - 1];

  const lastNumberIndex = input
    .slice(0, input.length - 1)
    .lastIndexOf(lastNumber);

  return lastNumberIndex === -1 ? 0 : input.length - lastNumberIndex - 1;
};

export default part1;
export { nextNumber };
