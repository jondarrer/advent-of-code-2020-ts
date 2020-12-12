import { RelativeDirection } from './relative-direction';
import { CompassDirection } from './compass-direction';
import { Rotation } from './rotation';
import part1, { nextPosition, changeDirection } from './part1';

const instructions = [
  { action: RelativeDirection.Forward, value: 10 },
  { action: CompassDirection.North, value: 3 },
  { action: RelativeDirection.Forward, value: 7 },
  { action: Rotation.Clockwise, value: 90 },
  { action: RelativeDirection.Forward, value: 11 },
];

describe('day12/part1', () => {
  it('should work out the Manhattan distance', () => {
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
      north: 3,
      east: 17,
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
  it('should rotate from north, clockwise 90 deg, to east', () => {
    expect(
      changeDirection(CompassDirection.North, Rotation.Clockwise, 90)
    ).toEqual(CompassDirection.East);
  });
  it('should rotate from north, clockwise 180 deg, to south', () => {
    expect(
      changeDirection(CompassDirection.North, Rotation.Clockwise, 180)
    ).toEqual(CompassDirection.South);
  });
  it('should rotate from north, clockwise 270 deg, to west', () => {
    expect(
      changeDirection(CompassDirection.North, Rotation.Clockwise, 270)
    ).toEqual(CompassDirection.West);
  });
  it('should rotate from north, anti-clockwise 90 deg, to west', () => {
    expect(
      changeDirection(CompassDirection.North, Rotation.AntiClockwise, 90)
    ).toEqual(CompassDirection.West);
  });
  it('should rotate from north, anti-clockwise 180 deg, to south', () => {
    expect(
      changeDirection(CompassDirection.North, Rotation.AntiClockwise, 180)
    ).toEqual(CompassDirection.South);
  });
  it('should rotate from north, anti-clockwise 270 deg, to east', () => {
    expect(
      changeDirection(CompassDirection.North, Rotation.AntiClockwise, 270)
    ).toEqual(CompassDirection.East);
  });
  it('should rotate from east, clockwise 90 deg, to south', () => {
    expect(
      changeDirection(CompassDirection.East, Rotation.Clockwise, 90)
    ).toEqual(CompassDirection.South);
  });
  it('should rotate from east, clockwise 180 deg, to west', () => {
    expect(
      changeDirection(CompassDirection.East, Rotation.Clockwise, 180)
    ).toEqual(CompassDirection.West);
  });
  it('should rotate from east, clockwise 270 deg, to north', () => {
    expect(
      changeDirection(CompassDirection.East, Rotation.Clockwise, 270)
    ).toEqual(CompassDirection.North);
  });
  it('should rotate from east, anti-clockwise 90 deg, to north', () => {
    expect(
      changeDirection(CompassDirection.East, Rotation.AntiClockwise, 90)
    ).toEqual(CompassDirection.North);
  });
  it('should rotate from east, anti-clockwise 180 deg, to west', () => {
    expect(
      changeDirection(CompassDirection.East, Rotation.AntiClockwise, 180)
    ).toEqual(CompassDirection.West);
  });
  it('should rotate from east, anti-clockwise 270 deg, to south', () => {
    expect(
      changeDirection(CompassDirection.East, Rotation.AntiClockwise, 270)
    ).toEqual(CompassDirection.South);
  });
  it('should rotate from south, clockwise 90 deg, to west', () => {
    expect(
      changeDirection(CompassDirection.South, Rotation.Clockwise, 90)
    ).toEqual(CompassDirection.West);
  });
  it('should rotate from south, clockwise 180 deg, to north', () => {
    expect(
      changeDirection(CompassDirection.South, Rotation.Clockwise, 180)
    ).toEqual(CompassDirection.North);
  });
  it('should rotate from south, clockwise 270 deg, to east', () => {
    expect(
      changeDirection(CompassDirection.South, Rotation.Clockwise, 270)
    ).toEqual(CompassDirection.East);
  });
  it('should rotate from south, anti-clockwise 90 deg, to east', () => {
    expect(
      changeDirection(CompassDirection.South, Rotation.AntiClockwise, 90)
    ).toEqual(CompassDirection.East);
  });
  it('should rotate from south, anti-clockwise 180 deg, to north', () => {
    expect(
      changeDirection(CompassDirection.South, Rotation.AntiClockwise, 180)
    ).toEqual(CompassDirection.North);
  });
  it('should rotate from south, anti-clockwise 270 deg, to west', () => {
    expect(
      changeDirection(CompassDirection.South, Rotation.AntiClockwise, 270)
    ).toEqual(CompassDirection.West);
  });
  it('should rotate from west, clockwise 90 deg, to north', () => {
    expect(
      changeDirection(CompassDirection.West, Rotation.Clockwise, 90)
    ).toEqual(CompassDirection.North);
  });
  it('should rotate from west, clockwise 180 deg, to east', () => {
    expect(
      changeDirection(CompassDirection.West, Rotation.Clockwise, 180)
    ).toEqual(CompassDirection.East);
  });
  it('should rotate from west, clockwise 270 deg, to south', () => {
    expect(
      changeDirection(CompassDirection.West, Rotation.Clockwise, 270)
    ).toEqual(CompassDirection.South);
  });
  it('should rotate from west, anti-clockwise 90 deg, to south', () => {
    expect(
      changeDirection(CompassDirection.West, Rotation.AntiClockwise, 90)
    ).toEqual(CompassDirection.South);
  });
  it('should rotate from west, anti-clockwise 180 deg, to east', () => {
    expect(
      changeDirection(CompassDirection.West, Rotation.AntiClockwise, 180)
    ).toEqual(CompassDirection.East);
  });
  it('should rotate from west, anti-clockwise 270 deg, to north', () => {
    expect(
      changeDirection(CompassDirection.West, Rotation.AntiClockwise, 270)
    ).toEqual(CompassDirection.North);
  });
});
