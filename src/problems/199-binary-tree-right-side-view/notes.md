# 199. Binary Tree Right Side View

- Link: https://leetcode.com/problems/binary-tree-right-side-view
- Difficulty: medium
- Pattern: BFS / Level Order Traversal
- Date: 2026-03-27

## Question Summary

Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes visible from the right side, ordered from top to bottom.

## Solutions

### 1) BFS Level Order Traversal (-- implemented, optimal)
- **Idea**: Use BFS to traverse level by level. At each level, only capture the rightmost node's value.
- **Time**: O(n) — each node visited once
- **Space**: O(w) — queue holds at most one level; w = max width (O(n) worst case)

```typescript
// For each level:
// - Process all nodes in the queue (current level)
// - The last node in the queue is the rightmost
// - Push its value to result
// - Build next level from children of all nodes
```

### 2) DFS Pre-order (alternative)
- **Idea**: DFS starting from right child first. Track depth; only add node if it's first node at that depth seen.
- **Time**: O(n)
- **Space**: O(h)

## Test Cases

- ✅ Example 1: `[1,2,3,null,5,null,4]` → `[1,3,4]`
- ✅ Example 2: `[1,2,3,4,null,null,null,5]` → `[1,3,4,5]`
- ✅ Example 3: `[1,null,3]` → `[1,3]`
- ✅ Empty tree → `[]`
- ✅ Single node → `[val]`
- ✅ Left-skewed tree → right side view is just the left child chain

## Mistakes And Lessons

- **Missing TreeNode import**: Solution used `TreeNode` type without importing it
  - Lesson: Always verify imports when using types from `../../types/`

## Other Useful Notes

- **Key insight**: Right side view = rightmost node at each level
- BFS naturally processes level-by-level, making it ideal for this problem
- The "right side" isn't just the right child — it's what you'd see standing on the right looking leftward
