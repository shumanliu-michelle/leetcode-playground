type RunTestsOptions<TInput, TExpected, TActual = TExpected> = {
  fn: (input: TInput) => TActual;
  testCases: TestCase<TInput, TExpected>[];
  isEqual?: (actual: TActual, expected: TExpected) => boolean;
  label?: string;
};

function runTestsImpl<TInput, TExpected, TActual = TExpected>(
  options: RunTestsOptions<TInput, TExpected, TActual>
): void {
  const { fn, testCases, isEqual = Object.is, label } = options;
  let pass = 0;

  if (label) console.log(label);

  for (const [i, testCase] of testCases.entries()) {
    const actual = fn(testCase.input);
    const ok = isEqual(actual, testCase.expected);
    if (ok) pass += 1;

    console.log(`Test ${i + 1} ${ok ? "✅" : "❌"} ${testCase.name ?? ""}`);
    if (!ok) {
      console.log(`  input:    ${JSON.stringify(testCase.input)}`);
      console.log(`  expected: ${JSON.stringify(testCase.expected)}`);
      console.log(`  actual:   ${JSON.stringify(actual)}`);
    }
  }

  console.log(`\n${pass}/${testCases.length} tests passed.`);
}

globalThis.runTests = runTestsImpl;

export {};
