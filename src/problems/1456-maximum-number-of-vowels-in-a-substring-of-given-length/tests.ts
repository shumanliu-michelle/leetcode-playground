import { maxVowels } from "./solution.js";

type Input = {
  s: string;
  k: number;
};

type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: { s: "abciiidef", k: 3 },
    expected: 3
  },
  {
    name: "example 2",
    input: { s: "aeiou", k: 2 },
    expected: 2
  },
  {
    name: "edge: all consonants",
    input: { s: "bcdfgh", k: 3 },
    expected: 0
  },
  {
    name: "edge: full string all vowels",
    input: { s: "aeiou", k: 5 },
    expected: 5
  },
  {
    name: "edge: window size 1",
    input: { s: "leetcode", k: 1 },
    expected: 1
  }
];

runTests({
  fn: ({ s, k }) => maxVowels(s, k),
  testCases,
  label: "Maximum Number of Vowels"
});
