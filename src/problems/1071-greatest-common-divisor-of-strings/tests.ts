import { gcdOfStrings_1, gcdOfStrings_2 } from "./solution.js";

type Input = {
  str1: string;
  str2: string;
};

type Output = string;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example: ABCABC / ABC",
    input: {
      str1: "ABCABC",
      str2: "ABC"
    },
    expected: "ABC"
  },
  {
    name: "example: ABABAB / ABAB",
    input: {
      str1: "ABABAB",
      str2: "ABAB"
    },
    expected: "AB"
  },
  {
    name: "example: no common base",
    input: {
      str1: "LEET",
      str2: "CODE"
    },
    expected: ""
  },
  {
    name: "edge: prefix exists but full repetition fails",
    input: {
      str1: "AAAAAB",
      str2: "AAA"
    },
    expected: ""
  },
  {
    name: "edge: partial overlap but no shared divisor",
    input: {
      str1: "ABBA",
      str2: "ABABBA"
    },
    expected: ""
  },
  {
    name: "edge: both equal",
    input: {
      str1: "AAA",
      str2: "AAA"
    },
    expected: "AAA"
  },
  {
    name: "edge: gcd length > 1",
    input: {
      str1: "XYZXYZXYZXYZ",
      str2: "XYZXYZ"
    },
    expected: "XYZXYZ"
  },
  {
    name: "edge: gcd length = 1",
    input: {
      str1: "AAAAA",
      str2: "A"
    },
    expected: "A"
  }
];

runTests({
  fn: ({ str1, str2 }) => gcdOfStrings_1(str1, str2),
  testCases,
  label: "Brute Force - shrink from the shorter string"
});

runTests({
  fn: ({ str1, str2 }) => gcdOfStrings_2(str1, str2),
  testCases,
  label: "Mathematical - concat"
});
