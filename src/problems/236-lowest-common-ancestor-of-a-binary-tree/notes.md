# 236. Lowest Common Ancestor of a Binary Tree

- Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
- Difficulty: medium
- Pattern: DFS / Tree Traversal / Backtracking
- Date: 2026-03-26

## Question Summary

Find the lowest common ancestor (LCA) of two given nodes in a binary tree. The LCA is the lowest node that has both p and q as descendants (a node can be a descendant of itself).

## Solutions

### 1) Recursive DFS with Backtracking (-- implemented, optimal)
- **Idea**: Post-order traversal. If a node is p or q, return it. If both children return non-null, this node is the LCA. Otherwise propagate whichever child found something.
- **Time**: O(n) — worst case visits every node
- **Space**: O(h) — recursion depth equals tree height (O(n) worst case for skewed tree)

```typescript
// For each node:
// - If node is p or q: return node
// - Recurse left and right
// - If both return non-null: current node is LCA (found both in subtrees)
// - Otherwise return whichever is non-null (or null if neither found)
```

### 2) Parent Pointer + HashSet (alternative)
- **Idea**: Traverse from p up to root storing ancestors in a Set, then traverse from q up until finding a match
- **Time**: O(n)
- **Space**: O(n)

## Test Cases

- ✅ Example 1: `p=5, q=1` → 3 (LCA is root)
- ✅ Example 2: `p=5, q=4` → 5 (node is descendant of itself)
- ✅ Example 3: `root=[1,2], p=1, q=2` → 1 (p is ancestor of q)
- ✅ Direct parent-child relationship
- ✅ Tree with only 2 nodes

## Mistakes And Lessons

- **Missing TreeNode import**: Solution used `TreeNode` type without importing it
  - Lesson: Always verify imports when using types from `../../types/`

## Other Useful Notes

- **Key insight**: Post-order traversal (bottom-up) ensures we find nodes deepest first
- **LCA definition**: A node counts as its own descendant — so if p is ancestor of q, p is the LCA
- **Backtracking pattern**: Return found node upward, combine results at parent level
