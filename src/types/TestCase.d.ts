type TestCase<TInput = any, TExpected = any> = {
  name?: string;
  input: TInput;
  expected: TExpected;
};
