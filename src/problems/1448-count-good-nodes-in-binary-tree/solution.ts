import { TreeNode } from "../../types/TreeNode.js";

export function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;
  let count = 0;
  const dfs = (node: TreeNode | null, max: number): void => {
    if (!node) return;
    if (node.val >= max) {
      count++;
      max = node.val;
    }
    dfs(node.left, max);
    dfs(node.right, max);
  };
  dfs(root, root.val);
  return count;
}

// Time O(n)
// Space O(h) where h = height (O(n) worst case for skewed, O(log n) for balanced)
