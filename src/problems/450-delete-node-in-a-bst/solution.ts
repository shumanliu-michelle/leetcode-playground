import { TreeNode } from "../../types/TreeNode.js";

export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;
    if (root.val < key) {
      root.right = deleteNode(root.right, key);
    } else if (root.val > key) {
      root.left = deleteNode(root.left, key);
    } else {
      // Found target node - 3 deletion cases
      if (!root.left && !root.right) return null; // leaf - just remove
      if (!root.left || !root.right) return root.left || root.right; // one child - promote
      // two children - borrow successor, then delete successor from right subtree
      let min = root.right;
      while (min && min.left) {
        min = min.left;  // move left to find smallest
      }
      root.val = min.val; // copy successor value
      root.right = deleteNode(root.right, min.val); // delete successor
    }
    return root;
};