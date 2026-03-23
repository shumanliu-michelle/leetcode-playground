import { equalPairs } from "./solution.js";

type Input = {
  grid: number[][];
};

type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { grid: [[3, 2, 1], [1, 7, 6], [2, 7, 7]] },
    expected: 1
  },
  {
    name: "example 2",
    input: { grid: [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]] },
    expected: 3
  },
  {
    name: "all identical rows",
    input: { grid: [[1, 1], [1, 1]] },
    expected: 4
  },
  {
    name: "no matches",
    input: { grid: [[1, 2], [3, 4]] },
    expected: 0
  }
];

runTests({
  fn: ({ grid }) => equalPairs(grid),
  testCases,
  label: "Equal Row and Column Pairs"
});
