import { BagRegulation } from './bag-regulation';
import { BagTreeNode } from './bag-tree-node';
import { ContainedBag } from './contained-bag';

const part2 = (regulations: Array<BagRegulation>): number => 0;

const treeOfBagsContainedBy = (
  regulations: Array<BagRegulation>,
  bag: string,
  parent: ContainedBag = null
): BagTreeNode => {
  const children: Array<BagTreeNode> = [];

  const regulation: BagRegulation = regulations.find((r) => r.bag === bag);

  for (let i = 0; i < regulation.contains.length; i++) {
    const child = regulation.contains[i];
    children.push(
      treeOfBagsContainedBy(regulations, child.bag, {
        bag,
        quantity: child.quantity,
      })
    );
  }

  return { bag, children, quantity: parent?.quantity || 1 };
};

export default part2;
export { treeOfBagsContainedBy };
