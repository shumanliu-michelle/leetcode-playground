import { TreeNode } from "../../types/TreeNode.js";
import { rightSideView } from "./solution.js";

type Input = { root: TreeNode | null };
type Output = number[];

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - [1,2,3,null,5,null,4]",
    input: {
      root: new TreeNode(1,
        new TreeNode(2, null, new TreeNode(5)),
        new TreeNode(3, null, new TreeNode(4))
      )
    },
    expected: [1, 3, 4]
  },
  {
    name: "example 2 - [1,2,3,4,null,null,null,5]",
    input: {
      root: new TreeNode(1,
        new TreeNode(2,
          new TreeNode(4,
            new TreeNode(5, null, null),
            null
          ),
          null
        ),
        new TreeNode(3, null, null)
      )
    },
    expected: [1, 3, 4, 5]
  },
  {
    name: "example 3 - [1,null,3]",
    input: {
      root: new TreeNode(1, null, new TreeNode(3))
    },
    expected: [1, 3]
  },
  {
    name: "empty tree",
    input: { root: null },
    expected: []
  },
  {
    name: "single node",
    input: { root: new TreeNode(42) },
    expected: [42]
  },
  {
    name: "left-skewed tree",
    input: {
      root: new TreeNode(1,
        new TreeNode(2,
          new TreeNode(3,
            new TreeNode(4, null, null),
            null
          ),
          null
        ),
        null
      )
    },
    expected: [1, 2, 3, 4]
  }
];

runTests({
  fn: ({ root }) => rightSideView(root),
  testCases
});
