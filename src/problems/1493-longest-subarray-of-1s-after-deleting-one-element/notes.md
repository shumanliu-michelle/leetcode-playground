# 1493-longest-subarray-of-1s-after-deleting-one-element

- Link: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
- Difficulty: medium
- Pattern: Sliding window (dynamic)

## Problem
Given a binary array `nums`, delete exactly one element and report the length of the longest remaining subarray that contains only `1`s. If no ones remain after the deletion, return `0`.

## Solutions
### Sliding-window `longestSubarray(nums: number[]): number`
- Summary: maintain a window with at most one zero (the one we delete). Expand `right`, track the zero count, and pull `left` forward while zeros exceed one. Each valid window represents a candidate streak after deleting one zero, so `windowLength - 1` is the number of ones after the deletion.
- Time: O(n) — each index is visited once while scanning and once while shrinking.
- Space: O(1) — only scalars for `left`, `zeros`, `maxLen`, and window length.

## Test Cases
- Example 1: `nums = [1,1,0,1]` → delete the zero to get `[1,1,1]`, result `3`.
- Example 2: `nums = [0,1,1,1,0,1,1,0,1]` → best window of length `6` after deleting one zero yields `5` ones.
- Edge: all ones (e.g., `[1,1,1]`) → must drop one element, return `2`.
- Edge: all zeros → no ones remain, so `0`.
- Edge: uneven zeros (e.g., `[1,1,0,1,1,1,0,1]`) → verify the window shrinks properly while still deleting exactly one zero.

## Mistakes And Lessons
- None yet.

## Other Useful Notes
- Constraints guarantee `1 <= nums.length`, so the initial window can always be seeded without checking for emptiness.
