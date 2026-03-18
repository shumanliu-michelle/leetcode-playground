import { increasingTriplet, increasingTriplet_2 } from "./solution.js";

type Input = {
  nums: number[];
};

type Output = boolean;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example: increasing exists",
    input: { nums: [1, 2, 3, 4, 5] },
    expected: true
  },
  {
    name: "example: decreasing only",
    input: { nums: [5, 4, 3, 2, 1] },
    expected: false
  },
  {
    name: "reset pattern: 2,3,1,2,5",
    input: { nums: [2, 3, 1, 2, 5] },
    expected: true
  },
  {
    name: "triplet with negatives",
    input: { nums: [-2, -1, -3, 0] },
    expected: true
  },
  {
    name: "duplicates only",
    input: { nums: [2, 2, 2, 2] },
    expected: false
  },
  {
    name: "length < 3",
    input: { nums: [1, 2] },
    expected: false
  },
  {
    name: "late success",
    input: { nums: [20, 100, 10, 12, 5, 13] },
    expected: true
  }
];

runTests({
  fn: ({ nums }) => increasingTriplet(nums),
  testCases,
  label: "increasingTriplet"
});

runTests({
  fn: ({ nums }) => increasingTriplet_2(nums),
  testCases,
  label: "increasingTriplet_2"
});
