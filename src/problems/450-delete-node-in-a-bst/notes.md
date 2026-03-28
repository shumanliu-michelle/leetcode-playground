# 450. Delete Node in a BST

- Link: https://leetcode.com/problems/delete-node-in-a-bst
- Difficulty: medium
- Pattern: BST / Recursion
- Date: 2026-03-27

## Question Summary

Given a BST and a key, delete the node with that key. Return the root of the modified BST. If the key doesn't exist, return the original BST unchanged.

## Solutions

### 1) Recursive BST Deletion (-- implemented)
- **Idea**: Use BST property to search for key. When found, handle 3 deletion cases. For two children, borrow successor (min of right subtree), copy its value, then delete successor from right subtree.
- **Time**: O(h) average, O(n) worst case
- **Space**: O(h) recursion depth

```typescript
// 3 cases when target found:
// 1. Leaf: return null (remove)
// 2. One child: return that child (bypass)
// 3. Two children: borrow successor value, then delete successor from right
```

### 2) Iterative approach (alternative)
- Same logic with while loop instead of recursion

## Test Cases

- ✅ Example 1: delete 3 from `[5,3,6,2,4,null,7]` → `[5,4,6,2,null,null,7]`
- ✅ Example 2: delete 0 (not found) → unchanged tree
- ✅ Example 3: empty tree → empty
- ✅ Delete leaf node
- ✅ Delete node with one child (left)
- ✅ Delete node with one child (right)
- ✅ Delete root node

## Mistakes And Lessons

- **Bug: `min = root.left` instead of `min = min.left`**
  - Lesson: When traversing to find min, move from `min`, not from `root`
  - Context: `while (min && min.left) { min = min.left; }` not `min = root.left`

## Other Useful Notes

- **Two-child deletion mental model**: "Borrow the next bigger value, then clean up where it came from"
- **Why successor works**: Min of right subtree is guaranteed to be >= all left subtree values, preserving BST property
- **Successor has no left child**: Since it's the min of a subtree, it can only have right child (or be leaf)
