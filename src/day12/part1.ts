import { RelativeDirection } from './relative-direction';
import { CompassDirection } from './compass-direction';
import { Rotation } from './rotation';
import { NavigationInstruction } from './navigation-instruction';
import { Position } from './position';

const part1 = (instructions: Array<NavigationInstruction>): number => 0;

const nextPosition = (
  currentDirection: CompassDirection,
  currentPosition: Position,
  instruction: NavigationInstruction
): Position => null;

const changeDirection = (
  currentDirection: CompassDirection,
  rotation: Rotation,
  value: number
): CompassDirection => CompassDirection.North;

export default part1;
export { nextPosition, changeDirection };
