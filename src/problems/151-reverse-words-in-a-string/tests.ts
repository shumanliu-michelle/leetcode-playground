import { reverseWords, reverseWords_followup } from "./solution.js";

type Input = {
  s: string;
};

type Output = string;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example: the sky is blue",
    input: { s: "the sky is blue" },
    expected: "blue is sky the"
  },
  {
    name: "example: padded words",
    input: { s: "  hello world  " },
    expected: "world hello"
  },
  {
    name: "example: multiple internal spaces",
    input: { s: "a good   example" },
    expected: "example good a"
  },
  {
    name: "edge: all spaces",
    input: { s: "      " },
    expected: ""
  },
  {
    name: "edge: single word with padding",
    input: { s: "   s   " },
    expected: "s"
  },
  {
    name: "edge: empty string",
    input: { s: "" },
    expected: ""
  },
  {
    name: "edge: one word no spaces",
    input: { s: "leetcode" },
    expected: "leetcode"
  }
];

runTests({
  fn: ({ s }) => reverseWords(s),
  testCases,
  label: "reverseWords"
});

runTests({
  fn: ({ s }) => reverseWords_followup(s),
  testCases,
  label: "reverseWords_followup"
});
