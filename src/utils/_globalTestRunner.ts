import cloneDeep from "lodash/cloneDeep.js";

type RunTestsOptions<TInput, TExpected, TActual = TExpected> = {
  fn: (input: TInput) => TActual;
  testCases: TestCase<TInput, TExpected>[];
  isEqual?: (actual: TActual, expected: TExpected) => boolean;
  label?: string;
};

function cloneInput<T>(input: T): T {
  return cloneDeep(input);
}

function deepEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true;

  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
    return false;
  }

  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i += 1) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  const aObj = a as Record<string, unknown>;
  const bObj = b as Record<string, unknown>;
  const aKeys = Object.keys(aObj);
  const bKeys = Object.keys(bObj);

  if (aKeys.length !== bKeys.length) return false;

  for (const key of aKeys) {
    if (!Object.prototype.hasOwnProperty.call(bObj, key)) return false;
    if (!deepEqual(aObj[key], bObj[key])) return false;
  }

  return true;
}

function runTestsImpl<TInput, TExpected, TActual = TExpected>(
  options: RunTestsOptions<TInput, TExpected, TActual>
): void {
  const { fn, testCases, isEqual = deepEqual as (actual: TActual, expected: TExpected) => boolean, label } = options;
  let pass = 0;

  if (label) console.log(label);

  for (const [i, testCase] of testCases.entries()) {
    const actual = fn(cloneInput(testCase.input));
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
