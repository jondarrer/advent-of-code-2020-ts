import { RelativeDirection } from './relative-direction';
import { CompassDirection } from './compass-direction';
import { Rotation } from './rotation';
import fileReadHandler from './file-read-handler';

describe('day12/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = ['F10', 'N3', 'F7', 'R90', 'F11'];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      { action: RelativeDirection.Forward, value: 10 },
      { action: CompassDirection.North, value: 3 },
      { action: RelativeDirection.Forward, value: 7 },
      { action: Rotation.Right, value: 90 },
      { action: RelativeDirection.Forward, value: 11 },
    ]);
  });
});
