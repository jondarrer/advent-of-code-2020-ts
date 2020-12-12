import { RelativeDirection } from './relative-direction';
import { CompassDirection } from './compass-direction';
import { Rotation } from './rotation';
import { NavigationInstruction } from './navigation-instruction';
import { Action } from './action';

const fileReadHandler = (
  accumulator: Array<NavigationInstruction>,
  line: string
): void => {
  accumulator.push({
    action: convertToAction(line.charAt(0)),
    value: parseInt(line.substr(1)),
  });
};

const convertToAction = (action: string): Action => {
  switch (action) {
    case 'N':
      return CompassDirection.North;
    case 'E':
      return CompassDirection.East;
    case 'S':
      return CompassDirection.South;
    case 'W':
      return CompassDirection.West;
    case 'R':
      return Rotation.Clockwise;
    case 'L':
      return Rotation.AntiClockwise;
    case 'F':
      return RelativeDirection.Forward;
    default:
      throw new Error(`Unsupported action '${action}'`);
  }
};

export default fileReadHandler;
