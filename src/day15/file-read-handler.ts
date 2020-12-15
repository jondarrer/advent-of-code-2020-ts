const fileReadHandler = (accumulator: Array<number>, line: string): void => {
  accumulator.push(...line.split(',').map((num) => parseInt(num)));
};

export default fileReadHandler;
