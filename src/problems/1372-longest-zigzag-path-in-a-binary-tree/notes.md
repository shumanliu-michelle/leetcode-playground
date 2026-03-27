# 1372. Longest Zigzag Path In A Binary Tree

- Link: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree
- Difficulty: medium
- Pattern: DFS / Tree Traversal
- Date: 2026-03-26

## Question Summary

Find the longest path in a binary tree where the path alternates direction (left-right-left or right-left-right) at each step. Return the maximum length (number of edges) in such a zigzag path.

## Solutions

### 1) DFS with Direction Tracking (-- implemented)
- **Idea**: For each node, track which direction we came from. If the next step alternates direction, extend the zigzag; otherwise reset to 1.
- **Time**: O(n) - visit each node once
- **Space**: O(h) - recursion depth equals tree height

```typescript
// For each child:
// - If direction alternates (prev was 'left', going 'right'): length + 1
// - If direction same (prev was 'left', going 'left'): reset to 1
// Track max across all paths
```

## Test Cases

- ✅ Example 1: zigzag path of length 3
- ✅ Example 2: single branch with alternating nodes
- ✅ Empty tree → 0
- ✅ Single node → 0 (no edges in zigzag)
- ✅ Straight line (no alternation) → 0 or 1 depending on definition

## Mistakes And Lessons

- **Direction reset**: When direction doesn't alternate, reset length to 1 (not 0) because the current node counts as the start of a new potential path
- **Initial calls**: Don't call dfs on root itself - start from root's children with length=1

## Other Useful Notes

- Zigzag path must alternate at EVERY step - same direction twice breaks the path
- A single edge has length 1 but is not a valid zigzag (needs at least 2 edges)
- The solution tracks `max` globally since we need the maximum across all paths, not just the current path
