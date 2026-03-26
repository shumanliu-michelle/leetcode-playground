import { TreeNode } from "../../types/TreeNode.js";
import { maxDepth } from "./solution.js";

type Input = { root: TreeNode | null };
type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - [3,9,20,null,null,15,7]",
    input: {
      root: new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
    },
    expected: 3
  },
  {
    name: "example 2 - [1,null,2]",
    input: {
      root: new TreeNode(1, null, new TreeNode(2))
    },
    expected: 2
  },
  {
    name: "empty tree",
    input: { root: null },
    expected: 0
  },
  {
    name: "single node",
    input: { root: new TreeNode(1) },
    expected: 1
  },
  {
    name: "skewed tree (left)",
    input: { root: new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null) },
    expected: 3
  }
];

runTests({
  fn: ({ root }) => maxDepth(root),
  testCases
});
