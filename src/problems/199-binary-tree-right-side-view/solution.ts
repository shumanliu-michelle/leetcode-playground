import { TreeNode } from "../../types/TreeNode.js";

export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  const view: number[] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const currLevel = queue.length;
    const nextLevel: TreeNode[] = [];
    for (let i = 0; i < currLevel; i++) {
      const node = queue[i]!;
      if (i === currLevel - 1) view.push(node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    queue.length = 0;
    queue.push(...nextLevel);
  }
  return view;
};