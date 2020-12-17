import { Notes } from './notes';
import { Rule } from './rule';

const part1 = (input: Array<Notes>): number => {
  const result = [];
  const notes = input[0];

  for (let i = 0; i < notes['nearby-tickets'].length; i++) {
    result.push(
      ...invalidTicketFieldsForRules(notes['nearby-tickets'][i], notes['rules'])
    );
  }

  return result.reduce((acc, cur) => acc + cur, 0);
};

const invalidTicketFieldsForRules = (
  ticket: Array<number>,
  rules: Array<Rule>
): Array<number> => {
  const result = [];
  let isValid;

  for (let i = 0; i < ticket.length; i++) {
    isValid = false;
    const field = ticket[i];
    for (let j = 0; j < rules.length; j++) {
      // Is the field valid?
      if (isFieldValidForRanges(field, rules[j])) {
        isValid = true;
        break;
      }
    }
    if (!isValid) {
      result.push(field);
    }
  }

  return result;
};

const isFieldValidForRanges = (field: number, rule: Rule): boolean => {
  return (
    (field >= rule.ranges[0].min && field <= rule.ranges[0].max) ||
    (field >= rule.ranges[1].min && field <= rule.ranges[1].max)
  );
};

export default part1;
export { invalidTicketFieldsForRules, isFieldValidForRanges };
