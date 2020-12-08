import { BagRegulation } from './bag-regulation';
import { ContainedBag } from './contained-bag';

const containedRegex = new RegExp(/(?<quantity>\d*)\s(?<bag>\w*\s\w*)\sbag/); // https://regex101.com/r/w77NUZ/1

const fileReadHandler = (
  accumulator: Array<BagRegulation>,
  line: string
): void => {
  const indexOfBagContains = line.indexOf(' bags contain ');
  const bag = line.substr(0, indexOfBagContains);
  let contains = [];
  const restOfLine = line.substr(indexOfBagContains + 14);
  if (restOfLine !== 'no other bags.') {
    contains = restOfLine.split(', ').map<ContainedBag>((contained) => {
      const groups = containedRegex.exec(contained).groups;
      return { quantity: parseInt(groups.quantity), bag: groups.bag };
    });
  }
  accumulator.push({ bag, contains });
};

export default fileReadHandler;
