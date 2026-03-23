import { pivotIndex } from "./solution.js";

type Input = {
  nums: number[];
};

type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { nums: [1, 7, 3, 6, 5, 6] },
    expected: 3
  },
  {
    name: "example 2",
    input: { nums: [1, 2, 3] },
    expected: -1
  },
  {
    name: "example 3",
    input: { nums: [2, 1, -1] },
    expected: 0
  },
  {
    name: "pivot at last index",
    input: { nums: [0, 0, 0, 0] },
    expected: 0
  },
  {
    name: "negative and zero mix",
    input: { nums: [-1, 1, 0, 1, -1] },
    expected: 2
  },
  {
    name: "single element",
    input: { nums: [5] },
    expected: 0
  }
];

runTests({
  fn: ({ nums }) => pivotIndex(nums),
  testCases,
  label: "Find Pivot Index"
});
