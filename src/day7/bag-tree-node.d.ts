export type BagTreeNode = {
  quantity: number;
  bag: string;
  parents?: Array<BagTreeNode>;
  children?: Array<BagTreeNode>;
};
