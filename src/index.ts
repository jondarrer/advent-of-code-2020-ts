import path from 'path';
import fileReader from './file-reader';

// day imports
import {
  fileReadHandler as day16FileReadHandler,
  part1 as day16part1,
  part2 as day16part2,
} from './day16';
import {
  fileReadHandler as day15FileReadHandler,
  part1 as day15part1,
  part2 as day15part2,
} from './day15';
import {
  fileReadHandler as day14FileReadHandler,
  part1 as day14part1,
  part2 as day14part2,
} from './day14';
import {
  fileReadHandler as day13FileReadHandler,
  part1 as day13part1,
  part2 as day13part2,
} from './day13';
import {
  fileReadHandler as day12FileReadHandler,
  part1 as day12part1,
  part2 as day12part2,
} from './day12';
import {
  fileReadHandler as day11FileReadHandler,
  part1 as day11part1,
  part2 as day11part2,
} from './day11';
import {
  fileReadHandler as day10FileReadHandler,
  part1 as day10part1,
  part2 as day10part2,
} from './day10';
import {
  fileReadHandler as day9FileReadHandler,
  part1 as day9part1,
  part2 as day9part2,
} from './day9';
import {
  fileReadHandler as day8FileReadHandler,
  part1 as day8part1,
  part2 as day8part2,
} from './day8';
import {
  fileReadHandler as day7FileReadHandler,
  part1 as day7part1,
  part2 as day7part2,
} from './day7';
import {
  fileReadHandler as day2FileReadHandler,
  part1 as day2part1,
  part2 as day2part2,
} from './day2';
import {
  fileReadHandler as day1FileReadHandler,
  part1 as day1part1,
  part2 as day1part2,
} from './day1';

const challenges = {
  // challenges by day
  '16': {
    fileReadHandler: day16FileReadHandler,
    '1': day16part1,
    '2': day16part2,
  },
  '15': {
    fileReadHandler: day15FileReadHandler,
    '1': day15part1,
    '2': day15part2,
  },
  '14': {
    fileReadHandler: day14FileReadHandler,
    '1': day14part1,
    '2': day14part2,
  },
  '13': {
    fileReadHandler: day13FileReadHandler,
    '1': day13part1,
    '2': day13part2,
  },
  '12': {
    fileReadHandler: day12FileReadHandler,
    '1': day12part1,
    '2': day12part2,
  },
  '11': {
    fileReadHandler: day11FileReadHandler,
    '1': day11part1,
    '2': day11part2,
  },
  '10': {
    fileReadHandler: day10FileReadHandler,
    '1': day10part1,
    '2': day10part2,
  },
  '9': {
    fileReadHandler: day9FileReadHandler,
    '1': day9part1,
    '2': day9part2,
  },
  '8': {
    fileReadHandler: day8FileReadHandler,
    '1': day8part1,
    '2': day8part2,
  },
  '7': {
    fileReadHandler: day7FileReadHandler,
    '1': day7part1,
    '2': day7part2,
  },
  '2': {
    fileReadHandler: day2FileReadHandler,
    '1': day2part1,
    '2': day2part2,
  },
  '1': {
    fileReadHandler: day1FileReadHandler,
    '1': day1part1,
    '2': day1part2,
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

const input = fileReader<number>(
  path.join(__dirname, `day${dayArg}/input.txt`),
  challenges[dayArg].fileReadHandler
);

console.time('Time');
console.log(
  `day ${dayArg}, part ${partArg} =`,
  challenges[dayArg][partArg](input)
);
console.timeEnd('Time');
