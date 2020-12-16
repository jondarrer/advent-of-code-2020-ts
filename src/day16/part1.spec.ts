import part1, { invalidTicketFieldsForRules } from './part1';

const notes = {
  rules: [
    {
      field: 'class',
      ranges: [
        { min: 1, max: 3 },
        { min: 5, max: 7 },
      ],
    },
    {
      field: 'row',
      ranges: [
        { min: 6, max: 11 },
        { min: 33, max: 44 },
      ],
    },
    {
      field: 'seat',
      ranges: [
        { min: 13, max: 40 },
        { min: 45, max: 50 },
      ],
    },
  ],
  'your-ticket': [7, 1, 14],
  'nearby-tickets': [
    [7, 3, 47],
    [40, 4, 50],
    [55, 2, 20],
    [38, 6, 12],
  ],
};

describe('day16/part1', () => {
  it('should work out the result', () => {
    expect(part1([notes])).toEqual(71);
  });
});
describe('day16/invalidTicketFieldsForRules', () => {
  it('should find no invalid fields for the first nearby ticket', () => {
    expect(
      invalidTicketFieldsForRules(notes['nearby-tickets'][0], notes.rules)
    ).toEqual([]);
  });
  it('should find one invalid field, 4, for the second nearby ticket', () => {
    expect(
      invalidTicketFieldsForRules(notes['nearby-tickets'][1], notes.rules)
    ).toEqual([4]);
  });
  it('should find one invalid field, 55, for the third nearby ticket', () => {
    expect(
      invalidTicketFieldsForRules(notes['nearby-tickets'][2], notes.rules)
    ).toEqual([55]);
  });
  it('should find one invalid field, 12, for the fourth nearby ticket', () => {
    expect(
      invalidTicketFieldsForRules(notes['nearby-tickets'][3], notes.rules)
    ).toEqual([12]);
  });
});
