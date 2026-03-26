export function maxDepth(root: TreeNode | null): number {
    // dfs 
    // for each node explore the depth of left and right subtree
    // then the curr depth would be max(left, right) + 1 
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
