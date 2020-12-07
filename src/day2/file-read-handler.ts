import { PolicyAndPassword } from './policy-and-password';

const fileReadHandler = (
  accumulator: Array<PolicyAndPassword>,
  line: string
): void => {
  accumulator.push({
    policy: {
      min: 0,
      max: 0,
      char: '',
    },
    password: '',
  });
};

export default fileReadHandler;
