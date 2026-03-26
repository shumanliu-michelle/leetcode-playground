import { TreeNode } from "../../types/TreeNode.js";
import { leafSimilar, leafSimilar_stack } from "./solution.js";

type Input = { root1: TreeNode | null; root2: TreeNode | null };
type Output = boolean;

// Tree 1:     3         Tree 2:      3
//           /   \               /   \
//          5     1             5     1
//         / \   / \           / \   / \
//        6   7 4   2         6   7 4   2
//               / \               / \
//              9   8             9   8
const tree1 = new TreeNode(3,
  new TreeNode(5, new TreeNode(6), new TreeNode(7)),
  new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8)))
);

const tree2 = new TreeNode(3,
  new TreeNode(5, new TreeNode(6), new TreeNode(7)),
  new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8)))
);

// tree1 leaves: 6, 7, 4, 9, 8
// tree2 leaves: 6, 7, 4, 9, 8

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - leaf similar",
    input: { root1: tree1, root2: tree2 },
    expected: true
  },
  {
    name: "example 2 - not leaf similar",
    input: {
      root1: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
      root2: new TreeNode(1, new TreeNode(3), new TreeNode(2))
    },
    expected: false
  },
  {
    name: "both empty",
    input: { root1: null, root2: null },
    expected: true
  },
  {
    name: "one empty one not",
    input: { root1: new TreeNode(1), root2: null },
    expected: false
  },
  {
    name: "single node both same",
    input: { root1: new TreeNode(1), root2: new TreeNode(1) },
    expected: true
  }
];

runTests({
  fn: ({ root1, root2 }) => leafSimilar(root1, root2),
  testCases
});

console.log("\n--- Stack version ---");
runTests({
  fn: ({ root1, root2 }) => leafSimilar_stack(root1, root2),
  testCases
});
