import { closeStrings, closeStringsOptimized } from "./solution.js";

type Input = {
  word1: string;
  word2: string;
};

type Output = boolean;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - permutations with same chars",
    input: { word1: "abc", word2: "bca" },
    expected: true
  },
  {
    name: "example 2 - different length",
    input: { word1: "a", word2: "aa" },
    expected: false
  },
  {
    name: "frequency reshuffle",
    input: { word1: "cabbba", word2: "abbccc" },
    expected: true
  },
  {
    name: "mismatched unique chars",
    input: { word1: "aabbcc", word2: "ddbbcc" },
    expected: false
  },
  {
    name: "same sets but different distribution",
    input: { word1: "abbccc", word2: "cccbba" },
    expected: true
  },
  {
    name: "completely different characters",
    input: { word1: "abc", word2: "def" },
    expected: false
  }
];

runTests({
  fn: ({ word1, word2 }) => closeStrings(word1, word2),
  testCases,
  label: "Determine if Two Strings Are Close"
});

runTests({
  fn: ({ word1, word2 }) => closeStringsOptimized(word1, word2),
  testCases,
  label: "Determine if Two Strings Are Close"
});
