# 437. Path Sum III

- Link: https://leetcode.com/problems/path-sum-iii
- Difficulty: medium
- Pattern: Prefix Sum / DFS / HashMap
- Date: 2026-03-26

## Question Summary

Find the number of paths in a binary tree that sum to a target. A path can start and end anywhere (not just root to leaf).

## Solutions

### 1) Prefix Sum + HashMap (-- implemented, optimal)
- **Idea**: Use prefix sums. For each node, if `prefixSum - targetSum` exists in our path history, we found a valid path ending at this node.
- **Key**: Initialize map with `{0: 1}` to handle paths starting at root.
- **Time**: O(n) - each node visited once
- **Space**: O(h) recursion + O(n) hashmap worst case

```typescript
// For each node:
// currSum = prefixSum + node.val
// If currSum - targetSum exists in map, that's number of valid paths ending here
// Then add currSum to map before recursing, remove after (backtrack)
```

## Test Cases

- ✅ Example 1: targetSum=8 → 3 paths
- ✅ Example 2: [1,2,3] targetSum=3 → 2 paths
- ✅ Example 3: [0,1,1] targetSum=1 → 4 paths
- ✅ Empty tree → 0
- ✅ Single node matches → 1
- ✅ Negative values handled correctly

## Mistakes And Lessons

- **Initial `+ 1` error**: Thought each lookup added 1 automatically, but the hashmap count IS the count of paths
  - Lesson: Hashmap stores count of times each prefix sum has been seen - just use it directly

## Other Useful Notes

- **Key insight**: Path can start anywhere, so we use prefix sums from root to current node
- **Prefix sum formula**: `currSum - targetSum = needed previous sum for valid path`
- **Backtracking**: Must decrement count after exploring subtrees to maintain correct path state
- **Initialization**: `{0: 1}` is crucial - represents empty path to root (for when root.val === targetSum)
