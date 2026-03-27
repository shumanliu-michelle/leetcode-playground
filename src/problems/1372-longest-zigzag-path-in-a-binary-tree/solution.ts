export function longestZigZag(root: TreeNode | null): number {
    if (!root) return 0;
    let max = 0;
    // dfs, for each node, track the direction it came from and the zigzag length so far
    // for next child that in different dir, increase zigzag length
    // for next child that in the same length, reset zigzag length to 1
    const dfs = (node: TreeNode, dir: 'left' | 'right', length: number) => {
      max = Math.max(max, length);
      if (node.left)  dfs(node.left, 'left', dir === 'right' ? length + 1 : 1);
      if (node.right) dfs(node.right, 'right', dir === 'left' ? length + 1 : 1);
    }
    if (root.left) dfs(root.left, 'left', 1);
    if (root.right) dfs(root.right, 'right', 1);
    return max;

};