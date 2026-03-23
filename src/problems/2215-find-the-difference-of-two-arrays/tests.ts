import { findDifference } from "./solution.js";

type Input = {
  nums1: number[];
  nums2: number[];
};

type Output = number[][];

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { nums1: [1, 2, 3], nums2: [2, 4, 6] },
    expected: [
      [1, 3],
      [4, 6]
    ]
  },
  {
    name: "example 2 with duplicates",
    input: { nums1: [1, 2, 3, 3], nums2: [1, 1, 2, 2] },
    expected: [[3], []]
  },
  {
    name: "disjoint arrays",
    input: { nums1: [5, 6], nums2: [7, 8] },
    expected: [
      [5, 6],
      [7, 8]
    ]
  },
  {
    name: "identical arrays",
    input: { nums1: [1, 1], nums2: [1, 1] },
    expected: [[], []]
  },
  {
    name: "negative numbers and zero",
    input: { nums1: [-1, -2, 0], nums2: [-2, 3] },
    expected: [
      [-1, 0],
      [3]
    ]
  },
  {
    name: "single-element difference",
    input: { nums1: [10], nums2: [20] },
    expected: [
      [10],
      [20]
    ]
  }
];

runTests({
  fn: ({ nums1, nums2 }) => findDifference(nums1, nums2),
  testCases,
  label: "Find the Difference of Two Arrays"
});
