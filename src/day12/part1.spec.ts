import { RelativeDirection } from './relative-direction';
import { CompassDirection } from './compass-direction';
import { Rotation } from './rotation';
import part1, { nextPosition, changeDirection } from './part1';

const instructions = [
  { action: RelativeDirection.Forward, value: 10 },
  { action: CompassDirection.North, value: 3 },
  { action: RelativeDirection.Forward, value: 7 },
  { action: Rotation.Right, value: 90 },
  { action: RelativeDirection.Forward, value: 11 },
];

describe('day12/part1', () => {
  it('should work out the result', () => {
    expect(part1(instructions)).toEqual(25);
  });
});
describe('day12/nextPosition', () => {
  it('should move in a relative direction, east, from 0, 0 to 0, 10', () => {
    const currentPosition = { north: 0, east: 0 };
    const instruction = { action: RelativeDirection.Forward, value: 10 };
    expect(
      nextPosition(CompassDirection.East, currentPosition, instruction)
    ).toEqual({
      north: 0,
      east: 10,
    });
  });
  it('should move in a compass direction, north, from 0, 10 to 3, 10', () => {
    const currentPosition = { north: 0, east: 10 };
    const instruction = { action: CompassDirection.North, value: 3 };
    expect(
      nextPosition(CompassDirection.East, currentPosition, instruction)
    ).toEqual({
      north: 3,
      east: 10,
    });
  });
  it('should move in a relative direction, east, from 3, 10 to 3, 17', () => {
    const currentPosition = { north: 3, east: 10 };
    const instruction = { action: RelativeDirection.Forward, value: 7 };
    expect(
      nextPosition(CompassDirection.East, currentPosition, instruction)
    ).toEqual({
      north: 0,
      east: 10,
    });
  });
  it('should move in a relative direction, south, from 3, 17 to -8, 17', () => {
    const currentPosition = { north: 3, east: 17 };
    const instruction = { action: RelativeDirection.Forward, value: 11 };
    expect(
      nextPosition(CompassDirection.South, currentPosition, instruction)
    ).toEqual({
      north: -8,
      east: 17,
    });
  });
});
describe('day12/changeDirection', () => {
  it('should rotate from east, right 90 deg, to south', () => {
    expect(changeDirection(CompassDirection.East, Rotation.Right, 90)).toEqual(
      CompassDirection.South
    );
  });
  it('should rotate from south, right 180 deg, to north', () => {
    expect(changeDirection(CompassDirection.East, Rotation.Right, 90)).toEqual(
      CompassDirection.North
    );
  });
  it('should rotate from west, left 270 deg, to south', () => {
    expect(changeDirection(CompassDirection.West, Rotation.Left, 270)).toEqual(
      CompassDirection.South
    );
  });
});
