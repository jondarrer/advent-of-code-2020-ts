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
    expect(moveInDirectionOfWaypoint(ship, waypoint, 10)).toEqual({
      north: 10,
      east: 100,
    });
  });
  it('should move in direction of waypoint 4, 10 with magnitude 7', () => {
    const waypoint = { north: 4, east: 10 };
    const ship = { north: 10, east: 100 };
    expect(moveInDirectionOfWaypoint(ship, waypoint, 7)).toEqual({
      north: 38,
      east: 170,
    });
  });
  it('should move in direction of waypoint 4, 11 with magnitude 11', () => {
    const waypoint = { north: -10, east: 4 };
    const ship = { north: 38, east: 170 };
    expect(moveInDirectionOfWaypoint(ship, waypoint, 11)).toEqual({
      north: -72,
      east: 214,
    });
  });
});
describe('day12/rotateWaypoint', () => {
  it('should rotate the waypoint 90 degrees clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    expect(rotateWaypoint(waypoint, Rotation.Clockwise, 90)).toEqual({
      north: -10,
      east: 4,
    });
  });
  it('should rotate the waypoint 180 degrees clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    expect(rotateWaypoint(waypoint, Rotation.Clockwise, 180)).toEqual({
      north: -4,
      east: -10,
    });
  });
  it('should rotate the waypoint 270 degrees clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    expect(rotateWaypoint(waypoint, Rotation.Clockwise, 270)).toEqual({
      north: 10,
      east: -4,
    });
  });
  it('should rotate the waypoint 90 degrees anti-clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    expect(rotateWaypoint(waypoint, Rotation.AntiClockwise, 90)).toEqual({
      north: 10,
      east: -4,
    });
  });
  it('should rotate the waypoint 180 degrees anti-clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    expect(rotateWaypoint(waypoint, Rotation.AntiClockwise, 180)).toEqual({
      north: -4,
      east: -10,
    });
  });
  it('should rotate the waypoint 270 degrees anti-clockwise from 4, 10', () => {
    const waypoint = { north: 4, east: 10 };
    expect(rotateWaypoint(waypoint, Rotation.AntiClockwise, 270)).toEqual({
      north: -10,
      east: 4,
    });
  });
});
describe('day12/moveWaypoint', () => {
  it('should move the waypoint at 1, 10 through north, 3 to 4, 10', () => {
    const waypoint = { north: 1, east: 10 };
    expect(moveWaypoint(waypoint, CompassDirection.North, 3)).toEqual({
      north: 4,
      east: 10,
    });
  });
  it('should move the waypoint at 1, 10 through east, 3 to 1, 13', () => {
    const waypoint = { north: 1, east: 10 };
    expect(moveWaypoint(waypoint, CompassDirection.East, 3)).toEqual({
      north: 1,
      east: 13,
    });
  });
  it('should move the waypoint at 1, 10 through south, 3 to -2, 10', () => {
    const waypoint = { north: 1, east: 10 };
    expect(moveWaypoint(waypoint, CompassDirection.South, 3)).toEqual({
      north: -2,
      east: 10,
    });
  });
  it('should move the waypoint at 1, 10 through west, 3 to 1, 7', () => {
    const waypoint = { north: 1, east: 10 };
    expect(moveWaypoint(waypoint, CompassDirection.West, 3)).toEqual({
      north: 1,
      east: 7,
    });
  });
});
