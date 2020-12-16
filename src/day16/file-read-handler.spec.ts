import fileReadHandler from './file-read-handler';

describe('day16/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = [
      'class: 1-3 or 5-7',
      'row: 6-11 or 33-44',
      'seat: 13-40 or 45-50',
      '',
      'your ticket:',
      '7,1,14',
      '',
      'nearby tickets:',
      '7,3,47',
      '40,4,50',
      '55,2,20',
      '38,6,12',
    ];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      {
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
      },
    ]);
  });
});
