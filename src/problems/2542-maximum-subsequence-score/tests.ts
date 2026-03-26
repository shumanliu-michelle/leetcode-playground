import { maxScore } from "./solution.js";

type Input = { nums1: number[]; nums2: number[]; k: number };
type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - k=3",
    input: { nums1: [1, 3, 3, 2], nums2: [2, 1, 3, 4], k: 3 },
    expected: 12
  },
  {
    name: "example 2 - k=1",
    input: { nums1: [4, 2, 3, 1, 1], nums2: [7, 5, 10, 9, 6], k: 1 },
    expected: 30
  }
];

runTests({
  fn: ({ nums1, nums2, k }) => maxScore(nums1, nums2, k),
  testCases
});
