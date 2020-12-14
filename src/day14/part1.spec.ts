import part1, { applyMaskToValue, padValue, countMemory } from './part1';

describe('day14/part1', () => {
  it('should work out the result', () => {
    const instructions = [
      {
        mask: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        writes: [
          { address: 8, value: 11 },
          { address: 7, value: 101 },
          { address: 8, value: 0 },
        ],
      },
    ];
    expect(part1(instructions)).toEqual(165);
  });
});
describe('day14/applyMaskToValue', () => {
  it('should apply mask XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X to 000000000000000000000000000000001011 and get 000000000000000000000000000001001001', () => {
    expect(
      applyMaskToValue(
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        '000000000000000000000000000000001011'
      )
    ).toEqual('000000000000000000000000000001001001');
  });
  it('should apply mask XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X to 000000000000000000000000000001100101 and get 000000000000000000000000000001100101', () => {
    expect(
      applyMaskToValue(
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        '000000000000000000000000000001100101'
      )
    ).toEqual('000000000000000000000000000001100101');
  });
  it('should apply mask XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X to 000000000000000000000000000000000000 and get 000000000000000000000000000001000000', () => {
    expect(
      applyMaskToValue(
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        '000000000000000000000000000000000000'
      )
    ).toEqual('000000000000000000000000000001000000');
  });
});
describe('day14/padValue', () => {
  it('should pad value 1100101 with 0s to length 36', () => {
    expect(padValue('1100101', 36, '0')).toEqual(
      '000000000000000000000000000001100101'
    );
  });
  it('should pad value 0 with 0s to length 36', () => {
    expect(padValue('0', 36, '0')).toEqual(
      '000000000000000000000000000000000000'
    );
  });
});
describe('day14/countMemory', () => {
  it('should count memory values 000000000000000000000000000001100101 and 000000000000000000000000000001000000 to be 165', () => {
    expect(
      countMemory([
        '000000000000000000000000000001100101',
        '000000000000000000000000000001000000',
      ])
    ).toEqual(165);
  });
});
