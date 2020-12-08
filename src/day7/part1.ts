import { BagRegulation } from './bag-regulation';
import { BagTreeNode } from './bag-tree-node';

const part1 = (regulations: Array<BagRegulation>): number => {
  return (
    traverseTreeNodeToGetAllBags(
      treeOfBagsContaining(regulations, 'shiny gold')
    ).reduce((acc, cur) => {
      if (!acc.includes(cur)) {
        acc.push(cur);
      }
      return acc;
    }, []).length - 1
  );
};

const traverseTreeNodeToGetAllBags = (
  bagTreeNode: BagTreeNode
): Array<string> => {
  const result = [bagTreeNode.bag];
  const parents = bagTreeNode.parents.flatMap((parent) =>
    traverseTreeNodeToGetAllBags(parent)
  );
  result.push(...parents);
  return result;
};

const treeOfBagsContaining = (
  regulations: Array<BagRegulation>,
  bag: string
): BagTreeNode => {
  const parents: Array<BagTreeNode> = [];

  // Find all the bags which directly contain this bag
  for (let i = 0; i < regulations.length; i++) {
    parents.push(
      ...regulations[i].contains
        .filter((contained) => contained.bag === bag)
        .map<BagTreeNode>((contained) =>
          treeOfBagsContaining(regulations, regulations[i].bag)
        )
    );
  }

  return { bag, parents };
};

export default part1;
export { treeOfBagsContaining };
