import { BagRegulation } from './bag-regulation';
import { BagTreeNode } from './bag-tree-node';

const part1 = (regulations: Array<BagRegulation>): number => 0;

const treeOfBagsContaining = (
  regulations: Array<BagRegulation>,
  bag: string
): BagTreeNode => ({ bag: '', parents: [] });

export default part1;
export { treeOfBagsContaining };
