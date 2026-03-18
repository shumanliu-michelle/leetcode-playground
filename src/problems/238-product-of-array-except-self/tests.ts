import { productExceptSelf } from "./solution.js";

type Input = {
  nums: number[];
};

type Output = number[];

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example: [1,2,3,4]",
    input: { nums: [1, 2, 3, 4] },
    expected: [24, 12, 8, 6]
  },
  {
    name: "example: [-1,1,0,-3,3]",
    input: { nums: [-1, 1, 0, -3, 3] },
    expected: [0, 0, 9, 0, 0]
  },
  {
    name: "edge: one zero",
    input: { nums: [4, 0, 2] },
    expected: [0, 8, 0]
  },
  {
    name: "edge: two zeros",
    input: { nums: [0, 5, 0] },
    expected: [0, 0, 0]
  },
  {
    name: "edge: negatives",
    input: { nums: [-1, -2, -3, -4] },
    expected: [-24, -12, -8, -6]
  },
  {
    name: "edge: single element",
    input: { nums: [7] },
    expected: [1]
  }
];

function sameArray(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((value, i) => value === b[i]);
}

runTests({
  fn: ({ nums }) => productExceptSelf(nums),
  testCases,
  isEqual: sameArray,
  label: "productExceptSelf"
});
