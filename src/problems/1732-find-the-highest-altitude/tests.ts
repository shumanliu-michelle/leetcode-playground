import { largestAltitude } from "./solution.js";

type Input = {
  gain: number[];
};

type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { gain: [-5, 1, 5, 0, -7] },
    expected: 1
  },
  {
    name: "example 2",
    input: { gain: [-4, -3, -2, -1, 4, 3, 2] },
    expected: 0
  },
  {
    name: "all positive gains",
    input: { gain: [1, 2, 3] },
    expected: 6
  },
  {
    name: "all negative gains",
    input: { gain: [-1, -2, -1] },
    expected: 0
  },
  {
    name: "zero gains",
    input: { gain: [0, 0, 0] },
    expected: 0
  },
  {
    name: "alternating ups and downs",
    input: { gain: [-2, 3, -1, 2] },
    expected: 2
  }
];

runTests({
  fn: ({ gain }) => largestAltitude(gain),
  testCases,
  label: "Find the Highest Altitude"
});
