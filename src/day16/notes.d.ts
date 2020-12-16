import { Rule } from './rule';

export type Notes = {
  rules: Array<Rule>;
  'your-ticket': Array<number>;
  'nearby-tickets': Array<Array<number>>;
};
