import path from 'path';
import fileReader from './file-reader';
import {
  part1 as day1part1,
  fileReadHandler as day1FileReadHandler,
} from './day1';

const challenges = {
  '1': {
    fileReadHandler: day1FileReadHandler,
    '1': day1part1,
  },
};

// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
if (process.argv.length !== 4) {
  console.error(
    'Please specify both the day and the part, e.g. "npm start 1 1" for day 1 part 1'
  );
}

const dayArg = process.argv[2];
const partArg = process.argv[3];
const days = Object.keys(challenges);
const parts = ['1', '2'];

if (!days.includes(dayArg)) {
  console.error(
    `Sorry, day ${dayArg} isn't available. Choose one from these: ${days.join(
      ', '
    )}`
  );
  process.exit(1); // https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
}

if (!parts.includes(partArg)) {
  console.error(
    `Sorry, part ${partArg} isn't available. Choose one from these: ${parts.join(
      ', '
    )}`
  );
  process.exit(1); // https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
}

if (dayArg === '1') {
  const input = fileReader<number>(
    path.join(__dirname, `day${dayArg}/input.txt`),
    challenges[dayArg].fileReadHandler
  );
  if (partArg === '1') {
    console.log(
      `day ${dayArg}, part ${partArg} =`,
      challenges[dayArg][partArg](input)
    );
  }
}
