import { createSubsequenceChecker, isSubsequence, isSubsequence_followup } from "./solution.js";

type Input = {
  s: string;
  t: string;
};

type Output = boolean;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example true",
    input: { s: "abc", t: "ahbgdc" },
    expected: true
  },
  {
    name: "example false",
    input: { s: "axc", t: "ahbgdc" },
    expected: false
  },
  {
    name: "edge: empty s",
    input: { s: "", t: "ahbgdc" },
    expected: true
  },
  {
    name: "edge: empty t",
    input: { s: "abc", t: "" },
    expected: false
  },
  {
    name: "repeated chars true",
    input: { s: "aaa", t: "baaac" },
    expected: true
  },
  {
    name: "repeated chars false",
    input: { s: "aaaa", t: "baaac" },
    expected: false
  }
];

runTests({
  fn: ({ s, t }) => isSubsequence(s, t),
  testCases,
  label: "isSubsequence"
});

runTests({
  fn: ({ s, t }) => isSubsequence_followup(s, t),
  testCases,
  label: "isSubsequence_followup"
});

type BatchInput = {
  t: string;
  queries: string[];
};

const followupBatchCases: TestCase<BatchInput, boolean[]>[] = [
  {
    name: "batch queries",
    input: {
      t: "ahbgdc",
      queries: ["abc", "axc", "", "bgc"]
    },
    expected: [true, false, true, true]
  }
];

function sameArray(a: boolean[], b: boolean[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

runTests({
  fn: ({ t, queries }) => {
    const checker = createSubsequenceChecker(t);
    return queries.map((q) => checker(q));
  },
  testCases: followupBatchCases,
  isEqual: sameArray,
  label: "createSubsequenceChecker"
});
