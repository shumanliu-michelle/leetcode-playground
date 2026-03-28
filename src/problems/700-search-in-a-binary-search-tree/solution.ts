export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    // bst - all node unique, nodes in left tree all smaller and nodes in right tree all greater
    // dfs traverse
    // compare each node.val with val 
    const dfs = (node: TreeNode | null): TreeNode | null => {
      if (!node) return null;
      if (node.val === val) return node;
      else if (node.val > val) {
        // find in left tree
        return dfs(node.left);
      } else { // node.val < val
        // find in right tree
        return dfs(node.right);
      }
    }
    return dfs(root);
};