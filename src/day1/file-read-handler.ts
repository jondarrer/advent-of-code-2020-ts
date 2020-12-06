const fileReadHandler = (accumulator: Array<number>, line: string): void => {
  accumulator.push(parseInt(line));
};

export default fileReadHandler;
