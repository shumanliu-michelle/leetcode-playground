import { TreeNode } from "../../types/TreeNode.js";
import { pathSum } from "./solution.js";

type Input = { root: TreeNode | null; targetSum: number };
type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 2 - [1,2,3] targetSum=3",
    input: {
      root: new TreeNode(1,
        null,
        new TreeNode(2,
          null,
          new TreeNode(3)
        )
      ),
      targetSum: 3
    },
    expected: 2
  },
  {
    name: "example 3 - [0,1,1] targetSum=1",
    input: {
      root: new TreeNode(0,
        new TreeNode(1, null, null),
        new TreeNode(1, null, null)
      ),
      targetSum: 1
    },
    expected: 4
  },
  {
    name: "empty tree",
    input: { root: null, targetSum: 1 },
    expected: 0
  },
  {
    name: "single node matches target",
    input: { root: new TreeNode(5), targetSum: 5 },
    expected: 1
  },
  {
    name: "single node no match",
    input: { root: new TreeNode(5), targetSum: 3 },
    expected: 0
  },
  {
    name: "negative values",
    input: {
      root: new TreeNode(-2, new TreeNode(-8), new TreeNode(-1)),
      targetSum: -10
    },
    expected: 1
  }
];

runTests({
  fn: ({ root, targetSum }) => pathSum(root, targetSum),
  testCases
});
