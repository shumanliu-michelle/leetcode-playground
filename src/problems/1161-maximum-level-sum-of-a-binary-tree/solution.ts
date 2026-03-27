import { TreeNode } from "../../types/TreeNode.js";

export function maxLevelSum(root: TreeNode | null): number {
    if (!root) return 0;
    const queue: TreeNode[] = [root];
    let ans = 0;
    let index = 0;
    let max = -Infinity;
    while (queue.length) {
      index++;
      const currLength = queue.length;
      const nextQueue: TreeNode[] = [];
      let sum = 0;
      for (let i = 0; i < currLength; i++) {
        const node = queue[i]!;
        sum += node.val;
        if (node.left) nextQueue.push(node.left);
        if (node.right) nextQueue.push(node.right);
      }
      if (sum > max) {
        max = sum;
        ans = index;
      }
      queue.length = 0;
      queue.push(...nextQueue);
    }
    return ans;
};