import { TreeNode } from "../../types/TreeNode.js";
import { longestZigZag } from "./solution.js";

type Input = { root: TreeNode | null };
type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - tree with zigzag",
    input: {
      root: new TreeNode(1,
        new TreeNode(1, null, new TreeNode(1)),
        new TreeNode(1)
      )
    },
    expected: 2
  },
  {
    name: "example 2 - [1,null,2,3,4]",
    input: {
      root: new TreeNode(1,
        null,
        new TreeNode(2,
          new TreeNode(3, null, null),
          new TreeNode(4, null, null)
        )
      )
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
    expected: 0
  },
  {
    name: "straight line left (no alternation)",
    input: {
      root: new TreeNode(1,
        new TreeNode(2,
          new TreeNode(3)
        ),
        null
      )
    },
    expected: 1
  },
  {
    name: "straight line right (no alternation)",
    input: {
      root: new TreeNode(1,
        null,
        new TreeNode(2,
          null,
          new TreeNode(3)
        )
      )
    },
    expected: 1
  },
  {
    name: "full zigzag tree - longest is 2 (not 3)",
    input: {
      root: new TreeNode(1,
        new TreeNode(2, null, new TreeNode(4)),
        new TreeNode(3, new TreeNode(5), null)
      )
    },
    expected: 2
  }
];

runTests({
  fn: ({ root }) => longestZigZag(root),
  testCases
});
