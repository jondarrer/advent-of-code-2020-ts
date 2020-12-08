import part1, { treeOfBagsContaining } from './part1';

const regulations = [
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
];

describe('day7/part1', () => {
  it('should work out the result', () => {
    expect(part1(regulations)).toEqual(4);
  });
});
describe('day7/treeOfBagsContaining', () => {
  it('should work out something', () => {
    expect(treeOfBagsContaining(regulations, 'shiny gold')).toEqual({
      bag: 'shiny gold',
      parents: [
        {
          bag: 'bright white',
          parents: [
            {
              bag: 'dark orange',
            },
            {
              bag: 'light red',
            },
          ],
        },
        {
          bag: 'muted yellow',
          parents: [
            {
              bag: 'dark orange',
            },
            {
              bag: 'light red',
            },
          ],
        },
      ],
    });
  });
});
