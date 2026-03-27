import { TreeNode } from "../../types/TreeNode.js";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	// for each node, if it is either p or q return
  // if one child is p or q and the node itself is neither p or q, just return the child (p/q) bubbling upwards
  // if one child is p or q and the node itself is p/q then the node must be the LCA
  // if children are p or q and the node itself would be LCA
  if (!root) return null;
  if (root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
};
