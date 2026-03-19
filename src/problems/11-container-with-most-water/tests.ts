import { maxArea } from "./solution.js";

type Input = {
  height: number[];
};

type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example",
    input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] },
    expected: 49
  },
  {
    name: "minimal two lines",
    input: { height: [1, 1] },
    expected: 1
  },
  {
    name: "equal heights",
    input: { height: [4, 4, 4, 4] },
    expected: 12
  },
  {
    name: "strictly increasing",
    input: { height: [1, 2, 3, 4, 5] },
    expected: 6
  },
  {
    name: "strictly decreasing",
    input: { height: [5, 4, 3, 2, 1] },
    expected: 6
  },
  {
    name: "best not at edges",
    input: { height: [2, 3, 10, 5, 7, 8, 9] },
    expected: 36
  }
];

runTests({
  fn: ({ height }) => maxArea(height),
  testCases,
  label: "maxArea"
});
