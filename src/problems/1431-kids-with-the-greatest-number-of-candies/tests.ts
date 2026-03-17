import { kidsWithCandies } from "./solution.js";

type Input = {
  candies: number[];
  extraCandies: number;
};

type Output = boolean[];

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: {
      candies: [2, 3, 5, 1, 3],
      extraCandies: 3
    },
    expected: [true, true, true, false, true]
  },
  {
    name: "example 2",
    input: {
      candies: [4, 2, 1, 1, 2],
      extraCandies: 1
    },
    expected: [true, false, false, false, false]
  },
  {
    name: "example 3",
    input: {
      candies: [12, 1, 12],
      extraCandies: 10
    },
    expected: [true, false, true]
  },
  {
    name: "edge: all equal candies",
    input: {
      candies: [5, 5, 5],
      extraCandies: 1
    },
    expected: [true, true, true]
  },
  {
    name: "edge: extra is zero",
    input: {
      candies: [1, 2, 3],
      extraCandies: 0
    },
    expected: [false, false, true]
  },
  {
    name: "edge: single maximum already present",
    input: {
      candies: [1, 1, 10, 1],
      extraCandies: 2
    },
    expected: [false, false, true, false]
  }
];

runTests({
  fn: ({ candies, extraCandies }) => kidsWithCandies(candies, extraCandies),
  testCases,
  label: "kidsWithCandies"
});
