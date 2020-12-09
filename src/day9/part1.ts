const part1 = (input: Array<number>, range = 25): number => {
  let i = 0;
  while (
    whichNumbersSumToTarget(input.slice(i, range + i), input[range + i]) !==
    null
  ) {
    i += 1;
  }
  return input[range + i];
};

const whichNumbersSumToTarget = (
  nums: Array<number>,
  target: number
): Array<number> => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }

  return null;
};

export default part1;
export { whichNumbersSumToTarget };
