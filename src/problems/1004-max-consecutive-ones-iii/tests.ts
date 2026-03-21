import { longestOnes } from "./solution.js";

type Input = {
  nums: number[];
  k: number;
};

type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2 },
    expected: 6
  },
  {
    name: "example 2",
    input: {
      nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      k: 3
    },
    expected: 10
  },
  {
    name: "edge: all ones",
    input: { nums: Array(10).fill(1), k: 2 },
    expected: 10
  },
  {
    name: "edge: need to shrink window",
    input: { nums: [0, 1, 0, 1, 0, 1, 1, 0], k: 1 },
    expected: 4
  },
  {
    name: "edge: zero flips allowed",
    input: { nums: [1, 0, 1, 1, 0, 1], k: 0 },
    expected: 2
  }
];

runTests({
  fn: ({ nums, k }) => longestOnes(nums, k),
  testCases,
  label: "Max Consecutive Ones III"
});
