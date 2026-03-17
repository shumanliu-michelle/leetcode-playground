type RunTestsOptions<TInput, TExpected, TActual = TExpected> = {
  fn: (input: TInput) => TActual;
  testCases: TestCase<TInput, TExpected>[];
  isEqual?: (actual: TActual, expected: TExpected) => boolean;
  label?: string;
};

declare function runTests<TInput, TExpected, TActual = TExpected>(
  options: RunTestsOptions<TInput, TExpected, TActual>
): void;
