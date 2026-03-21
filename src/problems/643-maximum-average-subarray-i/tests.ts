import { findMaxAverage } from "./solution.js";

type Input = {
  nums: number[];
  k: number;
};

type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { nums: [1, 12, -5, -6, 50, 3], k: 4 },
    expected: 12.75
  },
  {
    name: "example 2",
    input: { nums: [5], k: 1 },
    expected: 5
  },
  {
    name: "edge: all negatives",
    input: { nums: [-2, -1, -3, -2], k: 2 },
    expected: -1.5
  },
  {
    name: "edge: k equals length",
    input: { nums: [2, 5, 1, 3], k: 4 },
    expected: 2.75
  }
];

runTests({
  fn: ({ nums, k }) => findMaxAverage(nums, k),
  testCases,
  label: "Maximum Average Subarray I"
});
