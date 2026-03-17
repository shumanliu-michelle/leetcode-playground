import { mergeAlternately } from "./solution.js";

type Input = {
  word1: string;
  word2: string;
};

const testCases: TestCase<Input, string>[] = [
  { name: "example: equal length", input: { word1: "abc", word2: "pqr" }, expected: "apbqcr" },
  { name: "example: word2 longer", input: { word1: "ab", word2: "pqrs" }, expected: "apbqrs" },
  { name: "example: word1 longer", input: { word1: "abcd", word2: "pq" }, expected: "apbqcd" },
  { name: "edge: both empty", input: { word1: "", word2: "" }, expected: "" },
  { name: "edge: only word1 non-empty", input: { word1: "abc", word2: "" }, expected: "abc" },
  { name: "edge: only word2 non-empty", input: { word1: "", word2: "b" }, expected: "b" },
  { name: "edge: one-vs-many (word2)", input: { word1: "x", word2: "yz" }, expected: "xyz" },
  { name: "edge: one-vs-many (word1)", input: { word1: "xyz", word2: "a" }, expected: "xayz" },
  { name: "edge: repeated chars", input: { word1: "aaaa", word2: "bbbb" }, expected: "abababab" },
  { name: "edge: mixed symbols", input: { word1: "A1!", word2: "b2@" }, expected: "Ab12!@" }
];

runTests({
  fn: ({ word1, word2 }) => mergeAlternately(word1, word2),
  testCases,
});
