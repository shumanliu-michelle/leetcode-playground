import { maxOperations, maxOperations_hashmap } from "./solution.js";

type Input = {
  nums: number[];
  k: number;
};

type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { nums: [1, 2, 3, 4], k: 5 },
    expected: 2
  },
  {
    name: "example 2",
    input: { nums: [3, 1, 3, 4, 3], k: 6 },
    expected: 1
  },
  {
    name: "edge: no pairs",
    input: { nums: [1, 1, 1], k: 10 },
    expected: 0
  },
  {
    name: "edge: all can pair",
    input: { nums: [2, 2, 2, 2], k: 4 },
    expected: 2
  },
  {
    name: "edge: negatives",
    input: { nums: [-1, 0, 1, 2, -2, 3], k: 1 },
    expected: 3
  },
  {
    name: "edge: odd count with duplicates",
    input: { nums: [2, 2, 2, 3, 3, 4], k: 5 },
    expected: 2
  }
];

runTests({
  fn: ({ nums, k }) => maxOperations([...nums], k),
  testCases,
  label: "maxOperations"
});

runTests({
  fn: ({ nums, k }) => maxOperations_hashmap([...nums], k),
  testCases,
  label: "maxOperations_hashmap"
});
