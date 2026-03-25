# 724. Find Pivot Index

- Link: https://leetcode.com/problems/find-pivot-index
- Difficulty: easy
- Pattern: Prefix Sum

## Question Summary

Find the leftmost index where the sum of numbers strictly to the left equals the sum of numbers strictly to the right. If no such index exists, return `-1`.

## Solutions

### 1) Prefix-sum (implemented)
- Idea: compute `total = sum(nums)` once, then scan and maintain `leftSum`. At each index the right sum is `total - leftSum - nums[i]`; if it matches `leftSum`, return the index. Otherwise, add `nums[i]` to `leftSum` and continue.
- Time: O(n) — two passes but no nested work.
- Space: O(1) — only `total`, `leftSum`, and the loop index live in memory.

## Test Cases

- Example 1: `[1, 7, 3, 6, 5, 6]` → pivot index `3`.
- Example 2: `[1, 2, 3]` → no pivot so `-1`.
- Example 3: `[2, 1, -1]` → pivot index `0`.
- Edge: pivot at the last index by keeping every prefix balanced (`[0,0,0,0]` → `0`).
- Edge: mix of negative/positive/zeros (`[-1,1,0,1,-1]` → `2`).
- Edge: single element (`[5]` → `0`).

## Mistakes And Lessons

- None yet.

## Other Useful Notes

- The left-side sum starts at `0`, so the very first index can be a valid pivot when the rest of the array sums to zero.
