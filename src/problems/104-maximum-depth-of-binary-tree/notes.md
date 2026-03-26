# 104. Maximum Depth of Binary Tree

- Link: https://leetcode.com/problems/maximum-depth-of-binary-tree
- Difficulty: easy
- Pattern: DFS / Recursion / Binary Tree
- Date: 2026-03-26

## Question Summary

Given the root of a binary tree, return its maximum depth (number of nodes along the longest path from root to farthest leaf).

## Solutions

### 1) DFS Recursion (-- implemented)
- **Idea**: For each node, max depth = max(left subtree depth, right subtree depth) + 1. Base case: null node returns 0.
- **Time**: O(n) - visits every node once
- **Space**: O(h) - recursion stack where h = height (worst case O(n) for skewed tree)

## Test Cases

- ✅ `[3,9,20,null,null,15,7]` → 3
- ✅ `[1,null,2]` → 2
- ✅ Empty tree `null` → 0
- ✅ Single node → 1
- ✅ Skewed tree (left) → 3

## Mistakes And Lessons

- None yet - straightforward recursive solution

## Other Useful Notes

- **Key insight**: Maximum depth = 1 + max(left depth, right depth)
- **Base case**: Empty node (null) has depth 0
- **Alternative**: BFS using queue would also work - count levels while BFSing
