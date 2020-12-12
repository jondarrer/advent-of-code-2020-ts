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
  it('should rotate from north, right 90 deg, to east', () => {
    expect(changeDirection(CompassDirection.North, Rotation.Right, 90)).toEqual(
      CompassDirection.East
    );
  });
  it('should rotate from north, right 180 deg, to south', () => {
    expect(
      changeDirection(CompassDirection.North, Rotation.Right, 180)
    ).toEqual(CompassDirection.South);
  });
  it('should rotate from north, right 270 deg, to west', () => {
    expect(
      changeDirection(CompassDirection.North, Rotation.Right, 270)
    ).toEqual(CompassDirection.West);
  });
  it('should rotate from north, left 90 deg, to west', () => {
    expect(changeDirection(CompassDirection.North, Rotation.Left, 90)).toEqual(
      CompassDirection.West
    );
  });
  it('should rotate from north, left 180 deg, to south', () => {
    expect(changeDirection(CompassDirection.North, Rotation.Left, 180)).toEqual(
      CompassDirection.South
    );
  });
  it('should rotate from north, left 270 deg, to east', () => {
    expect(changeDirection(CompassDirection.North, Rotation.Left, 270)).toEqual(
      CompassDirection.East
    );
  });
  it('should rotate from east, right 90 deg, to south', () => {
    expect(changeDirection(CompassDirection.East, Rotation.Right, 90)).toEqual(
      CompassDirection.South
    );
  });
  it('should rotate from east, right 180 deg, to west', () => {
    expect(changeDirection(CompassDirection.East, Rotation.Right, 180)).toEqual(
      CompassDirection.West
    );
  });
  it('should rotate from east, right 270 deg, to north', () => {
    expect(changeDirection(CompassDirection.East, Rotation.Right, 270)).toEqual(
      CompassDirection.North
    );
  });
  it('should rotate from east, left 90 deg, to north', () => {
    expect(changeDirection(CompassDirection.East, Rotation.Left, 90)).toEqual(
      CompassDirection.North
    );
  });
  it('should rotate from east, left 180 deg, to west', () => {
    expect(changeDirection(CompassDirection.East, Rotation.Left, 180)).toEqual(
      CompassDirection.West
    );
  });
  it('should rotate from east, left 270 deg, to south', () => {
    expect(changeDirection(CompassDirection.East, Rotation.Left, 270)).toEqual(
      CompassDirection.South
    );
  });
  it('should rotate from south, right 90 deg, to west', () => {
    expect(changeDirection(CompassDirection.South, Rotation.Right, 90)).toEqual(
      CompassDirection.West
    );
  });
  it('should rotate from south, right 180 deg, to north', () => {
    expect(
      changeDirection(CompassDirection.South, Rotation.Right, 180)
    ).toEqual(CompassDirection.North);
  });
  it('should rotate from south, right 270 deg, to east', () => {
    expect(
      changeDirection(CompassDirection.South, Rotation.Right, 270)
    ).toEqual(CompassDirection.East);
  });
  it('should rotate from south, left 90 deg, to east', () => {
    expect(changeDirection(CompassDirection.South, Rotation.Left, 90)).toEqual(
      CompassDirection.East
    );
  });
  it('should rotate from south, left 180 deg, to north', () => {
    expect(changeDirection(CompassDirection.South, Rotation.Left, 180)).toEqual(
      CompassDirection.North
    );
  });
  it('should rotate from south, left 270 deg, to west', () => {
    expect(changeDirection(CompassDirection.South, Rotation.Left, 270)).toEqual(
      CompassDirection.West
    );
  });
  it('should rotate from west, right 90 deg, to north', () => {
    expect(changeDirection(CompassDirection.West, Rotation.Right, 90)).toEqual(
      CompassDirection.North
    );
  });
  it('should rotate from west, right 180 deg, to east', () => {
    expect(changeDirection(CompassDirection.West, Rotation.Right, 180)).toEqual(
      CompassDirection.East
    );
  });
  it('should rotate from west, right 270 deg, to south', () => {
    expect(changeDirection(CompassDirection.West, Rotation.Right, 270)).toEqual(
      CompassDirection.South
    );
  });
  it('should rotate from west, left 90 deg, to south', () => {
    expect(changeDirection(CompassDirection.West, Rotation.Left, 90)).toEqual(
      CompassDirection.South
    );
  });
  it('should rotate from west, left 180 deg, to east', () => {
    expect(changeDirection(CompassDirection.West, Rotation.Left, 180)).toEqual(
      CompassDirection.East
    );
  });
  it('should rotate from west, left 270 deg, to north', () => {
    expect(changeDirection(CompassDirection.West, Rotation.Left, 270)).toEqual(
      CompassDirection.North
    );
  });
});
