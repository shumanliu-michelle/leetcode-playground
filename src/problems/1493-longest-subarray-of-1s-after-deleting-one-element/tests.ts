import { longestSubarray } from "./solution.js";

type Input = {
  nums: number[];
};

type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { nums: [1, 1, 0, 1] },
    expected: 3
  },
  {
    name: "example 2",
    input: { nums: [0, 1, 1, 1, 0, 1, 1, 0, 1] },
    expected: 5
  },
  {
    name: "edge: all ones",
    input: { nums: [1, 1, 1] },
    expected: 2
  },
  {
    name: "edge: all zeros",
    input: { nums: [0, 0, 0] },
    expected: 0
  },
  {
    name: "edge: delete zero in the middle",
    input: { nums: [1, 1, 0, 1, 1, 1, 0, 1] },
    expected: 5
  }
];

runTests({
  fn: ({ nums }) => longestSubarray(nums),
  testCases,
  label: "Longest Subarray of 1s After Deleting One Element"
});
