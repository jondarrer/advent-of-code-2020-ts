import { RelativeDirection } from './relative-direction';
import { CompassDirection } from './compass-direction';
import { Rotation } from './rotation';
import part2, {
  moveInDirectionOfWaypoint,
  rotateWaypoint,
  moveWaypoint,
} from './part2';

const instructions = [
  { action: RelativeDirection.Forward, value: 10 },
  { action: CompassDirection.North, value: 3 },
  { action: RelativeDirection.Forward, value: 7 },
  { action: Rotation.Clockwise, value: 90 },
  { action: RelativeDirection.Forward, value: 11 },
];

describe('day12/part2', () => {
  it('should work out the Manhattan distance for the ship', () => {
    expect(part2(instructions)).toEqual(286);
  });
});
describe('day12/moveInDirectionOfWaypoint', () => {
  it('should move in direction of waypoint 1, 10 with magnitude 10', () => {
    const waypoint = { north: 1, east: 10 };
    const ship = { north: 0, east: 0 };
    const instruction = { action: RelativeDirection.Forward, value: 10 };
    expect(moveInDirectionOfWaypoint(ship, waypoint, instruction)).toEqual({
      north: 10,
      east: 100,
    });
  });
  it('should move in direction of waypoint 4, 10 with magnitude 7', () => {
    const waypoint = { north: 4, east: 10 };
    const ship = { north: 10, east: 100 };
    const instruction = { action: RelativeDirection.Forward, value: 7 };
    expect(moveInDirectionOfWaypoint(ship, waypoint, instruction)).toEqual({
      north: 38,
      east: 170,
    });
  });
  it('should move in direction of waypoint 4, 11 with magnitude 11', () => {
    const waypoint = { north: 4, east: 11 };
    const ship = { north: 38, east: 170 };
    const instruction = { action: RelativeDirection.Forward, value: 11 };
    expect(moveInDirectionOfWaypoint(ship, waypoint, instruction)).toEqual({
      north: -72,
      east: 214,
    });
  });
});
describe('day12/rotateWaypoint', () => {
  it('should rotate the waypoint 90 degrees clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    const instruction = { action: Rotation.Clockwise, value: 90 };
    expect(rotateWaypoint(waypoint, instruction)).toEqual({
      north: -10,
      east: 4,
    });
  });
  it('should rotate the waypoint 180 degrees clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    const instruction = { action: Rotation.Clockwise, value: 180 };
    expect(rotateWaypoint(waypoint, instruction)).toEqual({
      north: -4,
      east: -10,
    });
  });
  it('should rotate the waypoint 270 degrees clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    const instruction = { action: Rotation.Clockwise, value: 270 };
    expect(rotateWaypoint(waypoint, instruction)).toEqual({
      north: 10,
      east: -4,
    });
  });
  it('should rotate the waypoint 90 degrees anti-clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    const instruction = { action: Rotation.AntiClockwise, value: 90 };
    expect(rotateWaypoint(waypoint, instruction)).toEqual({
      north: 10,
      east: -4,
    });
  });
  it('should rotate the waypoint 180 degrees anti-clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    const instruction = { action: Rotation.AntiClockwise, value: 180 };
    expect(rotateWaypoint(waypoint, instruction)).toEqual({
      north: -4,
      east: -10,
    });
  });
  it('should rotate the waypoint 270 degrees anti-clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    const instruction = { action: Rotation.AntiClockwise, value: 270 };
    expect(rotateWaypoint(waypoint, instruction)).toEqual({
      north: -10,
      east: 4,
    });
  });
});
describe('day12/moveInDirectionOfWaypoint', () => {
  it('should move in direction of waypoint 1, 10 with magnitude 10', () => {
    const waypoint = { north: 1, east: 10 };
    const ship = { north: 0, east: 0 };
    const instruction = { action: RelativeDirection.Forward, value: 10 };
    expect(moveInDirectionOfWaypoint(ship, waypoint, instruction)).toEqual({
      north: 10,
      east: 100,
    });
  });
  it('should move in direction of waypoint 4, 10 with magnitude 7', () => {
    const waypoint = { north: 4, east: 10 };
    const ship = { north: 10, east: 100 };
    const instruction = { action: RelativeDirection.Forward, value: 7 };
    expect(moveInDirectionOfWaypoint(ship, waypoint, instruction)).toEqual({
      north: 38,
      east: 170,
    });
  });
  it('should move in direction of waypoint 4, 11 with magnitude 11', () => {
    const waypoint = { north: 4, east: 11 };
    const ship = { north: 38, east: 170 };
    const instruction = { action: RelativeDirection.Forward, value: 11 };
    expect(moveInDirectionOfWaypoint(ship, waypoint, instruction)).toEqual({
      north: -72,
      east: 214,
    });
  });
});
