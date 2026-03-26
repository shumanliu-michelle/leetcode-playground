import { TreeNode } from "../../types/TreeNode.js";

// Approach 1: DFS - collect leaves then compare
export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leaves1: TreeNode[] = [];
  const leaves2: TreeNode[] = [];
  collectLeaves(root1, leaves1);
  collectLeaves(root2, leaves2);
  if (leaves1.length !== leaves2.length) return false;
  return leaves1.every((node, i) => node.val === leaves2[i]!.val);
}

function collectLeaves(root: TreeNode | null, leaves: TreeNode[]): void {
  if (!root) return;
  if (!root.left && !root.right) {
    leaves.push(root);
    return;
  }
  collectLeaves(root.left, leaves);
  collectLeaves(root.right, leaves);
}

// Approach 2: Stack-based compare on-the-fly (more efficient space)
export function leafSimilar_stack(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const stack1: TreeNode[] = [];
  const stack2: TreeNode[] = [];
  if (root1) stack1.push(root1);
  if (root2) stack2.push(root2);

  while (stack1.length && stack2.length) {
    const leaf1 = getNextLeaf(stack1);
    const leaf2 = getNextLeaf(stack2);
    if (leaf1 !== leaf2) return false;
  }
  return !stack1.length && !stack2.length;
}

function getNextLeaf(stack: TreeNode[]): number | null {
  while (stack.length) {
    const node = stack.pop()!;
    if (!node.left && !node.right) return node.val;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return null;
}
