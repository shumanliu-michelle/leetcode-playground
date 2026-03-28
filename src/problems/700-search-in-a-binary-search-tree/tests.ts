import { TreeNode } from "../../types/TreeNode.js";
import { searchBST } from "./solution.js";

type Input = { root: TreeNode | null; val: number };
type Output = TreeNode | null;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - find node",
    input: {
      root: new TreeNode(4,
        new TreeNode(2, new TreeNode(1), new TreeNode(3)),
        new TreeNode(7)
      ),
      val: 2
    },
    expected: new TreeNode(2, new TreeNode(1), new TreeNode(3))
  },
  {
    name: "example 2 - not found",
    input: {
      root: new TreeNode(4,
        new TreeNode(2, new TreeNode(1), new TreeNode(3)),
        new TreeNode(7)
      ),
      val: 5
    },
    expected: null
  },
  {
    name: "single node - found",
    input: {
      root: new TreeNode(42),
      val: 42
    },
    expected: new TreeNode(42)
  },
  {
    name: "single node - not found",
    input: {
      root: new TreeNode(42),
      val: 10
    },
    expected: null
  },
  {
    name: "target smaller than all nodes",
    input: {
      root: new TreeNode(5,
        new TreeNode(3, new TreeNode(1), null),
        new TreeNode(7)
      ),
      val: 0
    },
    expected: null
  },
  {
    name: "target larger than all nodes",
    input: {
      root: new TreeNode(5,
        new TreeNode(3),
        new TreeNode(7)
      ),
      val: 10
    },
    expected: null
  }
];

runTests({
  fn: ({ root, val }) => searchBST(root, val),
  testCases
});
