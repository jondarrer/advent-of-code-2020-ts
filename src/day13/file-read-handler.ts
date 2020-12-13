const fileReadHandler = (
  accumulator: Array<number | Array<number | string>>,
  line: string
): void => {
  let result;
  if (line.indexOf(',') === -1) {
    result = parseInt(line);
  } else {
    result = line
      .split(',')
      .map((value) => (value === 'x' ? value : parseInt(value)));
  }
  accumulator.push(result);
};

export default fileReadHandler;
