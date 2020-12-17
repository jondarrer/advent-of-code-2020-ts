import { Notes } from './notes';
import { Rule } from './rule';

const part2 = (input: Array<Notes>, fieldsStartWith = 'departure'): number => 0;

const isValidTicket = (ticket: Array<number>, rules: Array<Rule>): boolean =>
  false;

const ticketsFieldRulePosibilities = (
  rules: Rule,
  tickets: Array<Array<number>>
): Array<boolean> => null;

export default part2;
export { isValidTicket, ticketsFieldRulePosibilities };
