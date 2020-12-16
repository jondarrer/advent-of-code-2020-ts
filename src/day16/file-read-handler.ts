import { Notes } from './notes';

const regexRule = new RegExp(
  /(?<field>[\w\s]+):\s(?<min1>\d+)-(?<max1>\d+)\sor\s(?<min2>\d+)-(?<max2>\d+)/
); // https://regex101.com/r/xeAyyE/1

const fileReadHandler = (accumulator: Array<Notes>, line: string): void => {
  if (accumulator.length === 0) {
    accumulator.push({
      rules: [],
      'your-ticket': null,
      'nearby-tickets': null,
    });
  }
  const notes = accumulator[0];
  if (notes.rules && notes['your-ticket'] && notes['nearby-tickets']) {
    // Nearby-Tickets
    if (line !== 'nearby tickets:') {
      notes['nearby-tickets'].push(line.split(',').map((n) => parseInt(n)));
    }
  } else if (notes.rules && notes['your-ticket']) {
    // Your-Ticket
    if (line === '') {
      notes['nearby-tickets'] = [];
    } else if (line !== 'your ticket:') {
      notes['your-ticket'] = line.split(',').map((n) => parseInt(n));
    }
  } else {
    // Rule
    if (line === '') {
      notes['your-ticket'] = [];
    } else {
      const groups = regexRule.exec(line).groups;
      notes.rules.push({
        field: groups.field,
        ranges: [
          {
            min: parseInt(groups.min1),
            max: parseInt(groups.max1),
          },
          {
            min: parseInt(groups.min2),
            max: parseInt(groups.max2),
          },
        ],
      });
    }
  }
};

export default fileReadHandler;
