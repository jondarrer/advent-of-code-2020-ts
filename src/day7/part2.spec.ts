import part2, { somethingElse } from './part2';

const regulations1 = [
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

const regulations2 = [
  {
    bag: 'shiny gold',
    contains: [
      {
        quantity: 2,
        bag: 'dark red',
      },
    ],
  },
  {
    bag: 'dark red',
    contains: [
      {
        quantity: 2,
        bag: 'dark orange',
      },
    ],
  },
  {
    bag: 'dark orange',
    contains: [
      {
        quantity: 2,
        bag: 'dark yellow',
      },
    ],
  },
  {
    bag: 'dark yellow',
    contains: [
      {
        quantity: 2,
        bag: 'dark green',
      },
    ],
  },
  {
    bag: 'dark green',
    contains: [
      {
        quantity: 2,
        bag: 'dark blue',
      },
    ],
  },
  {
    bag: 'dark blue',
    contains: [
      {
        quantity: 2,
        bag: 'dark violet',
      },
    ],
  },
  {
    bag: 'dark violet',
    contains: [],
  },
];

describe('day7/part2', () => {
  it('should work out the for regulations1', () => {
    expect(part2(regulations1)).toEqual(32);
  });
  it('should work out the for regulations2', () => {
    expect(part2(regulations2)).toEqual(126);
  });
});
