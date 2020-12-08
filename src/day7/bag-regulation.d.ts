import { ContainedBag } from './contained-bag';

export type BagRegulation = {
  bag: string;
  contains: Array<ContainedBag>;
};
