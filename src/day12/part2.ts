import { CompassDirection } from './compass-direction';
import { NavigationInstruction } from './navigation-instruction';
import { Position } from './position';
import { RelativeDirection } from './relative-direction';
import { Rotation } from './rotation';

const part2 = (instructions: Array<NavigationInstruction>): number => {
  let waypoint = { north: 1, east: 10 };
  let currentPosition = { north: 0, east: 0 };
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (
      instruction.action === CompassDirection.North ||
      instruction.action === CompassDirection.East ||
      instruction.action === CompassDirection.South ||
      instruction.action === CompassDirection.West
    ) {
      waypoint = moveWaypoint(waypoint, instruction.action, instruction.value);
    } else if (
      instruction.action === Rotation.Clockwise ||
      instruction.action === Rotation.AntiClockwise
    ) {
      waypoint = rotateWaypoint(
        waypoint,
        instruction.action,
        instruction.value
      );
    } else if (instruction.action === RelativeDirection.Forward) {
      currentPosition = moveInDirectionOfWaypoint(
        currentPosition,
        waypoint,
        instruction.value
      );
    } else {
      throw new Error(`Unexpected action '${instruction.action}'`);
    }
  }

  return Math.abs(currentPosition.north) + Math.abs(currentPosition.east);
};

const moveInDirectionOfWaypoint = (
  ship: Position,
  waypoint: Position,
  magnitude: number
): Position => ({
  north: ship.north + waypoint.north * magnitude,
  east: ship.east + waypoint.east * magnitude,
});

const rotateWaypoint = (
  waypoint: Position,
  rotation: Rotation,
  value: number
): Position => {
  if (
    (rotation === Rotation.Clockwise && value === 90) ||
    (rotation === Rotation.AntiClockwise && value === 270)
  ) {
    return { north: -1 * waypoint.east, east: waypoint.north };
  } else if (
    (rotation === Rotation.Clockwise && value === 180) ||
    (rotation === Rotation.AntiClockwise && value === 180)
  ) {
    return { north: -1 * waypoint.north, east: -1 * waypoint.east };
  } else if (
    (rotation === Rotation.Clockwise && value === 270) ||
    (rotation === Rotation.AntiClockwise && value === 90)
  ) {
    return { north: waypoint.east, east: -1 * waypoint.north };
  } else {
    throw new Error(`Unexpected rotation '${rotation}' and value '${value}'`);
  }
};

const moveWaypoint = (
  waypoint: Position,
  direction: CompassDirection,
  value: number
): Position => {
  switch (direction) {
    case CompassDirection.North:
      return { north: waypoint.north + value, east: waypoint.east };
    case CompassDirection.East:
      return { north: waypoint.north, east: waypoint.east + value };
    case CompassDirection.South:
      return { north: waypoint.north - value, east: waypoint.east };
    case CompassDirection.West:
      return { north: waypoint.north, east: waypoint.east - value };
    default:
      throw new Error(`Unexpected direction '${direction}'`);
  }
};

export default part2;
export { moveInDirectionOfWaypoint, rotateWaypoint, moveWaypoint };
