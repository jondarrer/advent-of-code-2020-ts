import { Range } from './range';

export type Rule = {
  field: string;
  ranges: Array<Range>;
};
