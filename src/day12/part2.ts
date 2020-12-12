import { NavigationInstruction } from './navigation-instruction';
import { Position } from './position';

const part2 = (input: Array<NavigationInstruction>): number => 0;

const moveInDirectionOfWaypoint = (
  ship: Position,
  waypoint: Position,
  instruction: NavigationInstruction
): Position => null;
const rotateWaypoint = (
  waypoint: Position,
  instruction: NavigationInstruction
): Position => null;
const moveWaypoint = (
  waypoint: Position,
  instruction: NavigationInstruction
): Position => null;

export default part2;
export { moveInDirectionOfWaypoint, rotateWaypoint, moveWaypoint };
