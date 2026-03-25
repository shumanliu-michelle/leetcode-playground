# 643. Maximum Average Subarray I

- Link: https://leetcode.com/problems/maximum-average-subarray-i
- Difficulty: easy
- Pattern: Sliding Window

## Question Summary

Given `nums` and `k`, what is the maximum average value that any contiguous subarray of length `k` can achieve? The answer must be within `1e-5` of the true value.

## Solutions

### 1) Sliding window (implemented)
- Idea: track the sum of the current window of size `k`, adding the incoming element and subtracting the element that slides out while keeping the maximum sum seen so far; return the max sum divided by `k`.
- Time: O(n) — each element is added and dropped exactly once.
- Space: O(1) — only scalars for the running sum and max.

## Test Cases

- Example 1: `nums = [1, 12, -5, -6, 50, 3], k = 4` → average `(12 - 5 - 6 + 50) / 4 = 12.75`.
- Example 2: `nums = [5], k = 1` → average `5.0`.
- Edge: `nums = [-3, -1, -4, -2], k = 2` → negative window ensures subtraction logic handles negative numbers (expect `-1.5`).
- Edge: `nums = [2, 5, 1, 3], k = 4` → the full array is the only window (average `2.75`).

## Mistakes And Lessons

- None yet.

## Other Useful Notes

- Answers are accepted if they are within `10^-5` of the true maximum average.
