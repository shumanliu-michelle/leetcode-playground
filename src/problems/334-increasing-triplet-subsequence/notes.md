# 334. Increasing Triplet Subsequence

- Link: https://leetcode.com/problems/increasing-triplet-subsequence
- Difficulty: medium
- Pattern: Greedy Thresholds

## Question Summary

Given an integer array, determine whether there exists an increasing subsequence of length 3 with indices `i < j < k` and values `nums[i] < nums[j] < nums[k]`.

## Solutions

### 1) Threshold greedy (implemented, optimal)
- Idea: track `first` (best tail for length-1) and `second` (best tail for length-2). Update thresholds while scanning left to right. If a number is greater than `second`, a valid triplet exists.
- Time: O(n)
- Space: O(1) auxiliary

### 2) Prefix-min + suffix-max (alternative, kept)
- Idea: build `min[i]` = minimum on left up to `i`. Build `max[i]` = maximum on right from `i`. Any index `i` with `min[i] < nums[i] < max[i]` confirms a triplet.
- Time: O(n)
- Space: O(n)

## Test Cases

- Increasing exists: `[1,2,3,4,5]` → `true`
- Decreasing only: `[5,4,3,2,1]` → `false`
- Reset pattern: `[2,3,1,2,5]` → `true`
- Duplicates only: `[2,2,2,2]` → `false`
- Length less than 3 → `false`
- Negative values mixed with positives

## Mistakes And Lessons

- Mindset gap: trying to lock one fixed triplet too early.
  - Lesson: track invariant thresholds (`first`, `second`) instead of fixed picks.

- Mindset gap: uncertainty about index order when `first` resets.
  - Lesson: left-to-right scan preserves order for existence checks; thresholds prove existence, not exact final tuple.

## Other Useful Notes

- Interpreting `second`: having `second` means a valid length-2 increasing candidate already exists.
- Generalization: this tail-threshold mindset extends to LIS-style `tails[k]` reasoning for longer lengths.
