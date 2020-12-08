import { BagRegulation } from './bag-regulation';
import { BagTreeNode } from './bag-tree-node';
import { ContainedBag } from './contained-bag';

const part1 = (regulations: Array<BagRegulation>): number => {
  return (
    traverseTreeNodeToGetAllBags(
      treeOfBagsContaining(regulations, 'shiny gold')
    ).reduce((acc, cur) => {
      if (!acc.includes(cur.bag)) {
        acc.push(cur.bag);
      }
      return acc;
    }, []).length - 1
  );
};

const traverseTreeNodeToGetAllBags = (
  bagTreeNode: BagTreeNode
): Array<ContainedBag> => {
  const result = [{ bag: bagTreeNode.bag, quantity: bagTreeNode.quantity }];
  const parents = bagTreeNode.parents.flatMap((parent) =>
    traverseTreeNodeToGetAllBags(parent)
  );
  result.push(...parents);
  return result;
};

const treeOfBagsContaining = (
  regulations: Array<BagRegulation>,
  bag: string,
  child: ContainedBag = null
): BagTreeNode => {
  const parents: Array<BagTreeNode> = [];

  // Find all the bags which directly contain this bag
  for (let i = 0; i < regulations.length; i++) {
    parents.push(
      ...regulations[i].contains
        .filter((contained) => contained.bag === bag)
        .map<BagTreeNode>((contained) =>
          treeOfBagsContaining(regulations, regulations[i].bag, contained)
        )
    );
  }

  return { bag, parents, quantity: child?.quantity || 1 };
};

export default part1;
export { treeOfBagsContaining };
