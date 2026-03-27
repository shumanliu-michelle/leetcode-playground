import { TreeNode } from "../../types/TreeNode.js";
import { lowestCommonAncestor } from "./solution.js";

type Input = { root: TreeNode | null; p: TreeNode | null; q: TreeNode | null };
type Output = TreeNode | null;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - LCA at root",
    input: (() => {
      const root = new TreeNode(3,
        new TreeNode(5,
          new TreeNode(6),
          new TreeNode(2, new TreeNode(7), new TreeNode(4))
        ),
        new TreeNode(1, new TreeNode(0), new TreeNode(8))
      );
      return { root, p: root.left, q: root.right };
    })(),
    expected: (() => {
      const root = new TreeNode(3,
        new TreeNode(5,
          new TreeNode(6),
          new TreeNode(2, new TreeNode(7), new TreeNode(4))
        ),
        new TreeNode(1, new TreeNode(0), new TreeNode(8))
      );
      return root;
    })()
  },
  {
    name: "example 2 - p is ancestor of q",
    input: (() => {
      const root = new TreeNode(3,
        new TreeNode(5,
          new TreeNode(6),
          new TreeNode(2, new TreeNode(7), new TreeNode(4))
        ),
        new TreeNode(1, new TreeNode(0), new TreeNode(8))
      );
      const pNode = root.left!; // val 5
      const qNode = root.left!.right!.right!; // val 4
      return { root, p: pNode, q: qNode };
    })(),
    expected: (() => {
      const root = new TreeNode(3,
        new TreeNode(5,
          new TreeNode(6),
          new TreeNode(2, new TreeNode(7), new TreeNode(4))
        ),
        new TreeNode(1, new TreeNode(0), new TreeNode(8))
      );
      return root.left; // p (val 5) is the LCA
    })()
  },
  {
    name: "example 3 - p is ancestor of q, two node tree",
    input: (() => {
      const root = new TreeNode(1, new TreeNode(2), null);
      return { root, p: root, q: root.left };
    })(),
    expected: (() => {
      const root = new TreeNode(1, new TreeNode(2), null);
      return root; // p (val 1) is the LCA
    })()
  },
  {
    name: "direct parent-child",
    input: (() => {
      const root = new TreeNode(3,
        new TreeNode(5,
          new TreeNode(6),
          new TreeNode(2, new TreeNode(7), new TreeNode(4))
        ),
        new TreeNode(1, new TreeNode(0), new TreeNode(8))
      );
      return { root, p: root.left!, q: root.left!.left! }; // 5 and 6
    })(),
    expected: (() => {
      const root = new TreeNode(3,
        new TreeNode(5,
          new TreeNode(6),
          new TreeNode(2, new TreeNode(7), new TreeNode(4))
        ),
        new TreeNode(1, new TreeNode(0), new TreeNode(8))
      );
      return root.left; // 5 is parent of 6
    })()
  },
  {
    name: "two node tree - q is child of p",
    input: (() => {
      const root = new TreeNode(1, new TreeNode(2), null);
      return { root, p: root.left, q: root };
    })(),
    expected: (() => {
      const root = new TreeNode(1, new TreeNode(2), null);
      return root;
    })()
  }
];

runTests({
  fn: ({ root, p, q }) => lowestCommonAncestor(root, p, q),
  testCases
});
