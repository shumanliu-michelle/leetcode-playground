# 700. Search in a Binary Search Tree

- Link: https://leetcode.com/problems/search-in-a-binary-search-tree
- Difficulty: easy
- Pattern: BST / DFS / Recursion
- Date: 2026-03-27

## Question Summary

Given the root of a binary search tree (BST) and an integer `val`, search the BST for a node with value `val` and return the subtree rooted at that node. If the node doesn't exist, return `null`.

## Solutions

### 1) Recursive BST Search (-- implemented, optimal)
- **Idea**: Use BST property — left subtree nodes are smaller, right subtree nodes are greater. Compare `val` with `node.val` to decide which subtree to search.
- **Time**: O(h) where h = tree height — eliminates half each step
- **Space**: O(h) — recursion depth (worst case O(n) for skewed tree)

```typescript
// If node is null or matches val: return node
// If val < node.val: search left subtree
// If val > node.val: search right subtree
```

### 2) Iterative (alternative)
- **Idea**: Same logic but using a while loop instead of recursion
- **Time**: O(h)
- **Space**: O(1)

## Test Cases

- ✅ Example 1: `root=[4,2,7,1,3], val=2` → subtree `[2,1,3]`
- ✅ Example 2: `root=[4,2,7,1,3], val=5` → `null` (not found)
- ✅ Single node matching → returns that node
- ✅ Single node not matching → `null`
- ✅ Target smaller than all nodes → goes left until `null`
- ✅ Target larger than all nodes → goes right until `null`

## Mistakes And Lessons

- **Missing `return` on recursive calls**: Initially forgot `return` before `dfs(node.left)` and `dfs(node.right)`
  - Lesson: When recursively searching for a value that may or may not exist, always `return` the result — otherwise the found node is discarded and you return `undefined`

## Other Useful Notes

- **BST property**: All node values are unique; left subtree values < node value < right subtree values
- **Return subtree not just node**: The problem asks for the entire subtree rooted at the found node, not just the node itself
