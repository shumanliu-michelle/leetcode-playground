# 1448. Count Good Nodes in Binary Tree

- Link: https://leetcode.com/problems/count-good-nodes-in-binary-tree
- Difficulty: medium
- Pattern: DFS / Tree Traversal
- Date: 2026-03-26

## Question Summary

A node X is "good" if in the path from root to X, no node has a value greater than X. Count all good nodes.

## Solutions

### 1) DFS with Path Maximum (-- implemented)
- **Idea**: DFS traversing from root. Track the maximum value seen on current path. Node is good if its value >= path maximum.
- **Time**: O(n) - every node visited once
- **Space**: O(h) where h = height (O(n) worst skewed, O(log n) balanced)

## Test Cases

- ✅ `[3,1,4,3,null,1,5]` → 4
- ✅ `[3,3,null,4,2]` → 3
- ✅ Single node → 1
- ✅ All increasing values → all nodes good
- ✅ All same values → all nodes good
- ✅ Negative values handled correctly

## Mistakes And Lessons

- No major mistakes - straightforward DFS with state tracking

## Other Useful Notes

- **Key insight**: Root is always a good node (it's the max on its path)
- **Algorithm**: `max` tracks path maximum. Node is good if `val >= max`
- **DFS structure**: Standard tree traversal with passing max down the recursion
