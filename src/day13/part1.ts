const part1 = (input: Array<number | Array<number | string>>): number => {
  const times = input[1] as Array<number | string>;
  const target = input[0] as number;
  const result = times.reduce(
    (acc, cur) => {
      if (cur === 'x') {
        return acc;
      }
      const onOrAfter = arrivesAtOrAfter(cur as number, target);
      return acc[1] < onOrAfter ? acc : [cur, onOrAfter];
    },
    [-1, Math.max]
  );
  const diff = (result[1] as number) - target;
  return diff * (result[0] as number);
};

const arrivesAtOrAfter = (period: number, target: number): number =>
  target + (target % period === 0 ? 0 : period - (target % period));

export default part1;
export { arrivesAtOrAfter };
