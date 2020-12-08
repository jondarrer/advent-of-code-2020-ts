import fileReadHandler from './file-read-handler';
import { BagRegulation } from './bag-regulation';

describe('day7/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = [
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ];
    const accumulator: Array<BagRegulation> = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      {
        bag: 'light red',
        contains: [
          {
            quantity: 1,
            bag: 'bright white',
          },
          {
            quantity: 2,
            bag: 'muted yellow',
          },
        ],
      },
      {
        bag: 'dark orange',
        contains: [
          {
            quantity: 3,
            bag: 'bright white',
          },
          {
            quantity: 4,
            bag: 'muted yellow',
          },
        ],
      },
      {
        bag: 'bright white',
        contains: [
          {
            quantity: 1,
            bag: 'shiny gold',
          },
        ],
      },
      {
        bag: 'muted yellow',
        contains: [
          {
            quantity: 2,
            bag: 'shiny gold',
          },
          {
            quantity: 9,
            bag: 'faded blue',
          },
        ],
      },
      {
        bag: 'shiny gold',
        contains: [
          {
            quantity: 1,
            bag: 'dark olive',
          },
          {
            quantity: 2,
            bag: 'vibrant plum',
          },
        ],
      },
      {
        bag: 'dark olive',
        contains: [
          {
            quantity: 3,
            bag: 'faded blue',
          },
          {
            quantity: 4,
            bag: 'dotted black',
          },
        ],
      },
      {
        bag: 'vibrant plum',
        contains: [
          {
            quantity: 5,
            bag: 'faded blue',
          },
          {
            quantity: 6,
            bag: 'dotted black',
          },
        ],
      },
      {
        bag: 'faded blue',
        contains: [],
      },
      {
        bag: 'dotted black',
        contains: [],
      },
    ]);
  });
});
