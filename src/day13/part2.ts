const part2 = (input: Array<number | Array<number | string>>): number => 0;

const calculateOriginFactor = (
  origin: number,
  other: number,
  offset: number
): number => {
  if (origin === offset) return other - 1;

  let factor = 1;
  while ((origin * factor + offset) % other !== 0) {
    factor += 1;
  }

  return factor;
};

export default part2;
export { calculateOriginFactor };
