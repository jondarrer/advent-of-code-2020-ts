import { PolicyAndPassword } from './policy-and-password';
import { Policy } from './policy';

const part2 = (list: Array<PolicyAndPassword>): number =>
  list.reduce<number>(
    (acc, cur) => acc + (isPasswordValid(cur.policy, cur.password) ? 1 : 0),
    0
  );

const isPasswordValid = (policy: Policy, password: string): boolean => {
  if (
    password.charAt(policy.min - 1) === policy.char &&
    password.charAt(policy.max - 1) === policy.char
  ) {
    return false;
  } else if (
    password.charAt(policy.min - 1) !== policy.char &&
    password.charAt(policy.max - 1) === policy.char
  ) {
    return true;
  } else if (
    password.charAt(policy.min - 1) === policy.char &&
    password.charAt(policy.max - 1) !== policy.char
  ) {
    return true;
  }
  return false;
};

export default part2;
export { isPasswordValid };
