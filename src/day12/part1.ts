import { RelativeDirection } from './relative-direction';
import { CompassDirection } from './compass-direction';
import { Rotation } from './rotation';
import { NavigationInstruction } from './navigation-instruction';
import { Position } from './position';

const part1 = (instructions: Array<NavigationInstruction>): number => {
  let currentDirection = CompassDirection.East;
  let currentPosition = { north: 0, east: 0 };
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (
      instruction.action === CompassDirection.North ||
      instruction.action === CompassDirection.East ||
      instruction.action === CompassDirection.South ||
      instruction.action === CompassDirection.West ||
      instruction.action === RelativeDirection.Forward
    ) {
      currentPosition = nextPosition(
        currentDirection,
        currentPosition,
        instruction
      );
    } else if (
      instruction.action === Rotation.Clockwise ||
      instruction.action === Rotation.AntiClockwise
    ) {
      currentDirection = changeDirection(
        currentDirection,
        instruction.action,
        instruction.value
      );
    } else {
      throw new Error(`Unexpected action '${instruction.action}'`);
    }
  }

  return Math.abs(currentPosition.north) + Math.abs(currentPosition.east);
};

const nextPosition = (
  currentDirection: CompassDirection,
  currentPosition: Position,
  instruction: NavigationInstruction
): Position => {
  if (
    instruction.action === CompassDirection.North ||
    (instruction.action === RelativeDirection.Forward &&
      currentDirection === CompassDirection.North)
  ) {
    return {
      north: currentPosition.north + instruction.value,
      east: currentPosition.east,
    };
  } else if (
    instruction.action === CompassDirection.East ||
    (instruction.action === RelativeDirection.Forward &&
      currentDirection === CompassDirection.East)
  ) {
    return {
      north: currentPosition.north,
      east: currentPosition.east + instruction.value,
    };
  } else if (
    instruction.action === CompassDirection.South ||
    (instruction.action === RelativeDirection.Forward &&
      currentDirection === CompassDirection.South)
  ) {
    return {
      north: currentPosition.north - instruction.value,
      east: currentPosition.east,
    };
  } else if (
    instruction.action === CompassDirection.West ||
    (instruction.action === RelativeDirection.Forward &&
      currentDirection === CompassDirection.West)
  ) {
    return {
      north: currentPosition.north,
      east: currentPosition.east - instruction.value,
    };
  }
  throw new Error(
    `Unexpected instruction '${instruction.action}|'${instruction.value}'. Only actions N, E, S, W & F are handled. Current direction is ${currentDirection}`
  );
};

const changeDirection = (
  currentDirection: CompassDirection,
  rotation: Rotation,
  value: number
): CompassDirection => {
  if (
    (currentDirection === CompassDirection.North &&
      rotation === Rotation.Clockwise &&
      value === 90) ||
    (currentDirection === CompassDirection.South &&
      rotation === Rotation.Clockwise &&
      value === 270) ||
    (currentDirection === CompassDirection.West &&
      rotation === Rotation.Clockwise &&
      value === 180) ||
    (currentDirection === CompassDirection.North &&
      rotation === Rotation.AntiClockwise &&
      value === 270) ||
    (currentDirection === CompassDirection.South &&
      rotation === Rotation.AntiClockwise &&
      value === 90) ||
    (currentDirection === CompassDirection.West &&
      rotation === Rotation.AntiClockwise &&
      value === 180)
  ) {
    return CompassDirection.East;
  } else if (
    (currentDirection === CompassDirection.East &&
      rotation === Rotation.Clockwise &&
      value === 90) ||
    (currentDirection === CompassDirection.North &&
      rotation === Rotation.Clockwise &&
      value === 180) ||
    (currentDirection === CompassDirection.West &&
      rotation === Rotation.Clockwise &&
      value === 270) ||
    (currentDirection === CompassDirection.East &&
      rotation === Rotation.AntiClockwise &&
      value === 270) ||
    (currentDirection === CompassDirection.North &&
      rotation === Rotation.AntiClockwise &&
      value === 180) ||
    (currentDirection === CompassDirection.West &&
      rotation === Rotation.AntiClockwise &&
      value === 90)
  ) {
    return CompassDirection.South;
  } else if (
    (currentDirection === CompassDirection.North &&
      rotation === Rotation.Clockwise &&
      value === 270) ||
    (currentDirection === CompassDirection.East &&
      rotation === Rotation.Clockwise &&
      value === 180) ||
    (currentDirection === CompassDirection.South &&
      rotation === Rotation.Clockwise &&
      value === 90) ||
    (currentDirection === CompassDirection.North &&
      rotation === Rotation.AntiClockwise &&
      value === 90) ||
    (currentDirection === CompassDirection.East &&
      rotation === Rotation.AntiClockwise &&
      value === 180) ||
    (currentDirection === CompassDirection.South &&
      rotation === Rotation.AntiClockwise &&
      value === 270)
  ) {
    return CompassDirection.West;
  } else if (
    (currentDirection === CompassDirection.East &&
      rotation === Rotation.Clockwise &&
      value === 270) ||
    (currentDirection === CompassDirection.South &&
      rotation === Rotation.Clockwise &&
      value === 180) ||
    (currentDirection === CompassDirection.West &&
      rotation === Rotation.Clockwise &&
      value === 90) ||
    (currentDirection === CompassDirection.East &&
      rotation === Rotation.AntiClockwise &&
      value === 90) ||
    (currentDirection === CompassDirection.South &&
      rotation === Rotation.AntiClockwise &&
      value === 180) ||
    (currentDirection === CompassDirection.West &&
      rotation === Rotation.AntiClockwise &&
      value === 270)
  ) {
    return CompassDirection.North;
  } else {
    throw new Error(
      `Unexpected direction '${currentDirection}', rotation '${rotation}' & value '${value}'`
    );
  }
};

export default part1;
export { nextPosition, changeDirection };
