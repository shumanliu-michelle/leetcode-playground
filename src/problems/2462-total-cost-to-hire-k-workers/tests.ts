import { totalCost } from "./solution.js";

type Input = { costs: number[]; k: number; candidates: number };
type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - k=3, candidates=4",
    input: { costs: [17, 12, 10, 2, 7, 2, 11, 20, 8], k: 3, candidates: 4 },
    expected: 11
  },
  {
    name: "example 2 - k=3, candidates=3",
    input: { costs: [1, 2, 4, 1], k: 3, candidates: 3 },
    expected: 4
  },
  {
    name: "candidates >= costs.length",
    input: { costs: [1, 2, 3], k: 2, candidates: 5 },
    expected: 3
  },
  {
    name: "single element",
    input: { costs: [5], k: 1, candidates: 1 },
    expected: 5
  }
];

runTests({
  fn: ({ costs, k, candidates }) => totalCost(costs, k, candidates),
  testCases
});
