# 1004. Max Consecutive Ones III

- Link: https://leetcode.com/problems/max-consecutive-ones-iii
- Difficulty: medium
- Pattern: Sliding Window

## Question Summary

Given a binary array `nums` and an integer `k`, flip at most `k` zeros to maximize one's streak. Return the length of the longest subarray containing only ones after at most `k` flips.

## Solutions

### 1) Sliding window (implemented)
- Idea: keep a dynamic window and track how many zeros it contains. Expand `right`, incrementing the zero count when needed, and contract `left` whenever the zero count exceeds `k`. The window length gives the current candidate answer.
- Time: O(n) — each element is visited twice (entering and leaving the window).
- Space: O(1) — only scalar counters for `left`, `zeros`, and `maxLen`.

## Test Cases

- Example 1: `nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2` → flip two zeros in the middle to get ten ones and a window of length `6`.
- Example 2: `nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3` → best window length is `10`.
- Edge: `nums` all ones, any `k` → result is `nums.length`.
- Edge: `k = 0`, must return the longest existing ones run (e.g., `[1,0,1,1,0,1]` → `3`).
- Edge: flips force shrinking the window to stay within `k`.

## Mistakes And Lessons

- None yet.

## Other Useful Notes

- Constraints guarantee `k <= nums.length`, so the first window always exists with proper guard.
