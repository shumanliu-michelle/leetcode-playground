import { findKthLargest, findKthLargest_countingSort } from "./solution.js";

type Input = { nums: number[]; k: number };
type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - k=2",
    input: { nums: [3, 2, 1, 5, 6, 4], k: 2 },
    expected: 5
  },
  {
    name: "example 2 - with duplicates",
    input: { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4 },
    expected: 4
  },
  {
    name: "k=1 returns max",
    input: { nums: [1, 2, 3], k: 1 },
    expected: 3
  },
  {
    name: "k=n returns min",
    input: { nums: [1, 2, 3], k: 3 },
    expected: 1
  },
  {
    name: "all duplicates",
    input: { nums: [5, 5, 5, 5], k: 2 },
    expected: 5
  },
  {
    name: "negative numbers",
    input: { nums: [-3, -1, -5, -2, -4], k: 2 },
    expected: -2
  }
];

runTests({
  fn: ({ nums, k }) => findKthLargest(nums, k),
  testCases
});
runTests({
  fn: ({ nums, k }) => findKthLargest_countingSort(nums, k),
  testCases
});

