import { TreeNode } from "../../types/TreeNode.js";

export function pathSum(root: TreeNode | null, targetSum: number): number {
  let count = 0;
  // Map stores how many times a prefix sum has been seen on current path
  const lookup = new Map<number, number>();
  lookup.set(0, 1); // Empty path to root

  const dfs = (node: TreeNode | null, prefixSum: number) => {
    if (!node) return;
    const currSum = prefixSum + node.val;
    const needed = currSum - targetSum;
    count += lookup.get(needed) || 0;

    // Add current sum before exploring children
    lookup.set(currSum, (lookup.get(currSum) || 0) + 1);
    dfs(node.left, currSum);
    dfs(node.right, currSum);
    // Remove current sum after exploring children (backtrack)
    lookup.set(currSum, lookup.get(currSum)! - 1);
  };

  dfs(root, 0);
  return count;
}
