import { reverseVowels } from "./solution.js";

type Input = {
  s: string;
};

type Output = string;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example: IceCreAm",
    input: { s: "IceCreAm" },
    expected: "AceCreIm"
  },
  {
    name: "example: leetcode",
    input: { s: "leetcode" },
    expected: "leotcede"
  },
  {
    name: "edge: odd number of vowels",
    input: { s: "alkijhemn" },
    expected: "elkijhamn"
  },
  {
    name: "edge: even number of vowels",
    input: { s: "obacudfga" },
    expected: "abucadfgo"
  },
  {
    name: "edge: no vowels",
    input: { s: "xyz" },
    expected: "xyz"
  },
  {
    name: "edge: one vowel only",
    input: { s: "bacdfga" },
    expected: "bacdfga"
  },
  {
    name: "edge: single vowel char",
    input: { s: "a" },
    expected: "a"
  },
  {
    name: "edge: single consonant char",
    input: { s: "b" },
    expected: "b"
  },
  {
    name: "edge: mixed case vowels",
    input: { s: "hEllO" },
    expected: "hOllE"
  }
];

runTests({
  fn: ({ s }) => reverseVowels(s),
  testCases,
  label: "reverseVowels"
});
