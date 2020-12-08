import { BagRegulation } from './bag-regulation';
import { ContainedBag } from './contained-bag';

const part2 = (regulations: Array<BagRegulation>): number => 0;

const treeOfBagsContainedBy = (
  regulations: Array<BagRegulation>,
  bag: string,
  parent: ContainedBag = null
): BagTreeNode => {
  return { bag: '', children: [], quantity: 0 };
};

export default part2;
export { treeOfBagsContainedBy };
