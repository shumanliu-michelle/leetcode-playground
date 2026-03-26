import { TreeNode } from "../../types/TreeNode.js";
import { goodNodes } from "./solution.js";

type Input = { root: TreeNode | null };
type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - [3,1,4,3,null,1,5]",
    input: {
      root: new TreeNode(3,
        new TreeNode(1, new TreeNode(3), null),
        new TreeNode(4, new TreeNode(1), new TreeNode(5))
      )
    },
    expected: 4
  },
  {
    name: "example 2 - [3,3,null,4,2]",
    input: {
      root: new TreeNode(3,
        new TreeNode(3, new TreeNode(4), new TreeNode(2)),
        null
      )
    },
    expected: 3
  },
  {
    name: "single node",
    input: { root: new TreeNode(1) },
    expected: 1
  },
  {
    name: "all increasing values",
    input: {
      root: new TreeNode(1,
        new TreeNode(2, new TreeNode(3, new TreeNode(4), null), null),
        null
      )
    },
    expected: 4
  },
  {
    name: "negative values [-2,-8,null,-1]",
    input: {
      root: new TreeNode(-2,
        new TreeNode(-8, null, null),
        new TreeNode(-1, null, null)
      )
    },
    expected: 2
  },
  {
    name: "mixed negative/positive",
    input: {
      root: new TreeNode(5,
        new TreeNode(-1, null, null),
        new TreeNode(7, null, null)
      )
    },
    expected: 2
  }
];

runTests({
  fn: ({ root }) => goodNodes(root),
  testCases
});
