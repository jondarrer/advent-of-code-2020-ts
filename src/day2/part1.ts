import { PolicyAndPassword } from './policy-and-password';
import { Policy } from './policy';

const part1 = (list: Array<PolicyAndPassword>): number =>
  list.reduce<number>(
    (acc, cur) => acc + (isPasswordValid(cur.policy, cur.password) ? 1 : 0),
    0
  );

const isPasswordValid = (policy: Policy, password: string): boolean => {
  const count = (password.match(new RegExp(policy.char, 'g')) || []).length;
  return count >= policy.min && count <= policy.max;
};

export default part1;
export { isPasswordValid };
