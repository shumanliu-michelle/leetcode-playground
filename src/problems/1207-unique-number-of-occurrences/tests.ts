import { uniqueOccurrences } from "./solution.js";

type Input = {
  arr: number[];
};

type Output = boolean;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { arr: [1, 2, 2, 1, 1, 3] },
    expected: true
  },
  {
    name: "example 2",
    input: { arr: [1, 2] },
    expected: false
  },
  {
    name: "example 3 with negatives",
    input: { arr: [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0] },
    expected: true
  },
  {
    name: "all identical",
    input: { arr: [5, 5, 5, 5] },
    expected: true
  },
  {
    name: "no duplicates",
    input: { arr: [1, 2, 3, 4] },
    expected: false
  },
  {
    name: "unique occurrences with zero",
    input: { arr: [0, 0, 1, 1, 2, 2, 3] },
    expected: false
  }
];

runTests({
  fn: ({ arr }) => uniqueOccurrences(arr),
  testCases,
  label: "Unique Number of Occurrences"
});
