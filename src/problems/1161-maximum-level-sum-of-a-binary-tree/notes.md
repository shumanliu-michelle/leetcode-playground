# 1161. Maximum Level Sum of a Binary Tree

- Link: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree
- Difficulty: medium
- Pattern: BFS / Level Order Traversal
- Date: 2026-03-27

## Question Summary

Given the root of a binary tree, return the smallest level (1-indexed) that has the maximum sum of node values at that level.

## Solutions

### 1) BFS Level Order Traversal (-- implemented, optimal)
- **Idea**: Use BFS to process level by level. Track the sum of each level and return the smallest level with the maximum sum (use `>` not `>=` for tie-breaking).
- **Time**: O(n) — each node visited once
- **Space**: O(w) — queue holds at most one level; w = max width (O(n) worst case)

```typescript
// For each level:
// - Sum all node values
// - If sum > max, update max and ans
// - Do NOT replace on tie (ans stays at smallest level with max)
```

## Test Cases

- ✅ Example 1: `[1,7,0,7,-8,null,null]` → 2 (level 2 sum=7 > level 1 sum=1)
- ✅ Example 2: `[989,null,10250,98693,-89388,...]` → 2
- ✅ All-negative tree: returns level 1 (smallest level with highest sum)
- ✅ Single node → 1
- ✅ Tie case: equal sums at different levels → returns smallest level

## Mistakes And Lessons

- **Unused lodash import**: `import { initial } from "lodash"` was unnecessary
  - Lesson: Remove unused imports to keep code clean
- **Missing TreeNode import**: Solution used `TreeNode` without importing it

## Other Useful Notes

- **Tie-breaking rule**: Use strict `>` not `>=` — smallest level wins when sums are equal
- **Initialization**: Use `-Infinity` as initial `max` to handle all-negative trees correctly
- **Level indexing**: Start `index` at 0, increment before processing each level, so final `ans` is 1-indexed
