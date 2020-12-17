import part2, { isValidTicket, ticketsFieldRulePosibilities } from './part2';

const notes = {
  rules: [
    {
      field: 'class',
      ranges: [
        { min: 0, max: 1 },
        { min: 4, max: 19 },
      ],
    },
    {
      field: 'row',
      ranges: [
        { min: 0, max: 5 },
        { min: 8, max: 19 },
      ],
    },
    {
      field: 'seat',
      ranges: [
        { min: 0, max: 13 },
        { min: 16, max: 19 },
      ],
    },
  ],
  'your-ticket': [11, 12, 13],
  'nearby-tickets': [
    [3, 9, 18],
    [15, 1, 5],
    [5, 14, 9],
  ],
};

describe('day16/part2', () => {
  it('should work out the result for class, row & seat', () => {
    expect(part2([notes], 'class')).toEqual(12);
    expect(part2([notes], 'row')).toEqual(11);
    expect(part2([notes], 'seat')).toEqual(13);
  });
});
describe('day16/isValidTicket', () => {
  it('should determine 1st ticket to be valid', () => {
    expect(isValidTicket(notes['nearby-tickets'][0], notes['rules'])).toEqual(
      true
    );
  });
  it('should determine 2nd ticket to be valid', () => {
    expect(isValidTicket([40, 4, 50], notes['rules'])).toEqual(false);
  });
  it('should determine 3rd ticket to be valid', () => {
    expect(isValidTicket([55, 2, 20], notes['rules'])).toEqual(false);
  });
  it('should determine 4th ticket to be valid', () => {
    expect(isValidTicket([38, 6, 12], notes['rules'])).toEqual(false);
  });
});
describe('day16/ticketsFieldRulePosibilities', () => {
  it('should determine class rule to be a match for the 2nd & 3rd fields', () => {
    expect(
      ticketsFieldRulePosibilities(notes['rules'][0], notes['nearby-tickets'])
    ).toEqual([false, true, true]);
  });
  it('should determine row rule to be a match for the 2nd & 3rd fields', () => {
    expect(
      ticketsFieldRulePosibilities(notes['rules'][1], notes['nearby-tickets'])
    ).toEqual([true, true, true]);
  });
  it('should determine seat rule to be a match for the 2nd & 3rd fields', () => {
    expect(
      ticketsFieldRulePosibilities(notes['rules'][2], notes['nearby-tickets'])
    ).toEqual([false, false, true]);
  });
});
