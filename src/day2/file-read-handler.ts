import { PolicyAndPassword } from './policy-and-password';

const passwordAndPolicyRegex = new RegExp(
  /(?<min>\d*)-(?<max>\d*)\s(?<char>[a-z]):\s(?<password>[a-zA-Z0-9]*)/
);

const fileReadHandler = (
  accumulator: Array<PolicyAndPassword>,
  line: string
): void => {
  const match = passwordAndPolicyRegex.exec(line);
  accumulator.push({
    policy: {
      min: parseInt(match.groups.min),
      max: parseInt(match.groups.max),
      char: match.groups.char,
    },
    password: match.groups.password,
  });
};

export default fileReadHandler;
