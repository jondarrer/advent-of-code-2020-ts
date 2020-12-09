const part2 = (input: Array<number>, target: number = 167829540): number => {
  const sumToTarget = whichNumbersSumToTarget(input, target);
  const smallest = sumToTarget.reduce(
    (acc, cur) => (cur < acc ? cur : acc),
    sumToTarget[0]
  );
  const biggest = sumToTarget.reduce(
    (acc, cur) => (cur > acc ? cur : acc),
    sumToTarget[0]
  );
  return smallest + biggest;
};

const whichNumbersSumToTarget = (
  nums: Array<number>,
  target: number
): Array<number> => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const range = nums.slice(i, j + 1);
      if (range.reduce((acc, cur) => acc + cur, 0) === target) {
        return range;
      }
    }
  }

  return null;
};

export default part2;
export { whichNumbersSumToTarget };
