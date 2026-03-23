# 2215-find-the-difference-of-two-arrays

- Link: https://leetcode.com/problems/find-the-difference-of-two-arrays
- Difficulty: easy
- Pattern: Set difference

## Problem
Return two lists: the distinct values that exist in `nums1` but not `nums2`, and vice versa.

## Solutions
### Set-based `findDifference(nums1: number[], nums2: number[]): number[][]`
- Summary: build `Set`s for both arrays, iterate each input once to collect numbers absent from the other set, and convert the result sets to arrays.
- Time: O(n + m) — each array is scanned twice (for set creation and difference checking).
- Space: O(n + m) — `Set`s for deduplication plus the result sets.

## Test Cases
- Example 1: `nums1 = [1,2,3]`, `nums2 = [2,4,6]` → `[[1,3],[4,6]]`.
- Example 2: `nums1 = [1,2,3,3]`, `nums2 = [1,1,2,2]` → `[[3],[]]` to ensure duplicates collapse.
- Edge: disjoint inputs (e.g., `[5,6]`, `[7,8]`) should return the entire unique sets.
- Edge: identical inputs return `[[],[]]`.
- Edge: support negatives and zero (e.g., `[-1,-2,0]` vs `[-2,3]`).
- Edge: single-element arrays with different values.

## Mistakes And Lessons
- None yet.

## Other Useful Notes
- The order of the result lists does not matter per the problem statement, so the runner only checks for equality after sorting internally if needed.
