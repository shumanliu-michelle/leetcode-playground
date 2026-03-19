import { moveZeroes } from "./solution.js";

type Input = {
  nums: number[];
};

type Output = number[];

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { nums: [0, 1, 0, 3, 12] },
    expected: [1, 3, 12, 0, 0]
  },
  {
    name: "example 2",
    input: { nums: [0] },
    expected: [0]
  },
  {
    name: "edge: no zeros",
    input: { nums: [1, 2, 3] },
    expected: [1, 2, 3]
  },
  {
    name: "edge: all zeros",
    input: { nums: [0, 0, 0] },
    expected: [0, 0, 0]
  },
  {
    name: "edge: zeros already at end",
    input: { nums: [4, 5, 0, 0] },
    expected: [4, 5, 0, 0]
  },
  {
    name: "edge: interleaved zeros",
    input: { nums: [0, 1, 0, 2, 0, 3] },
    expected: [1, 2, 3, 0, 0, 0]
  }
];

function sameArray(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((value, i) => value === b[i]);
}

runTests({
  fn: ({ nums }) => {
    const arr = [...nums];
    moveZeroes(arr);
    return arr;
  },
  testCases,
  isEqual: sameArray,
  label: "moveZeroes"
});
