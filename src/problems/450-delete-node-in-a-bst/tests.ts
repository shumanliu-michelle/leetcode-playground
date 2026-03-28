import { TreeNode } from "../../types/TreeNode.js";
import { deleteNode } from "./solution.js";

type Input = { root: TreeNode | null; key: number };
type Output = TreeNode | null;

// Helper to compare trees
function treesEqual(a: TreeNode | null, b: TreeNode | null): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.val === b.val && treesEqual(a.left, b.right);
}

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - delete node with two children",
    input: {
      root: new TreeNode(5,
        new TreeNode(3, new TreeNode(2), new TreeNode(4)),
        new TreeNode(6, null, new TreeNode(7))
      ),
      key: 3
    },
    expected: new TreeNode(5,
      new TreeNode(4, new TreeNode(2), null),
      new TreeNode(6, null, new TreeNode(7))
    )
  },
  {
    name: "example 2 - key not found",
    input: {
      root: new TreeNode(5,
        new TreeNode(3, new TreeNode(2), new TreeNode(4)),
        new TreeNode(6, null, new TreeNode(7))
      ),
      key: 0
    },
    expected: new TreeNode(5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(6, null, new TreeNode(7))
    )
  },
  {
    name: "example 3 - empty tree",
    input: { root: null, key: 0 },
    expected: null
  },
  {
    name: "delete leaf node",
    input: {
      root: new TreeNode(1, new TreeNode(0), new TreeNode(2)),
      key: 0
    },
    expected: new TreeNode(1, null, new TreeNode(2))
  },
  {
    name: "delete node with one child (right)",
    input: {
      root: new TreeNode(1, null, new TreeNode(2)),
      key: 1
    },
    expected: new TreeNode(2)
  },
  {
    name: "delete node with one child (left)",
    input: {
      root: new TreeNode(1, new TreeNode(0), null),
      key: 1
    },
    expected: new TreeNode(0)
  },
  {
    name: "delete root",
    input: {
      root: new TreeNode(5,
        new TreeNode(3),
        new TreeNode(6)
      ),
      key: 5
    },
    expected: new TreeNode(6, new TreeNode(3), null)
  }
];

runTests({
  fn: ({ root, key }) => deleteNode(root, key),
  testCases
});
