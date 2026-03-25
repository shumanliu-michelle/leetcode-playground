# 1732. Find The Highest Altitude

- Link: https://leetcode.com/problems/find-the-highest-altitude
- Difficulty: easy
- Pattern: Prefix Sum

## Question Summary

Start at altitude `0` and apply each `gain[i]` to compute the altitude at point `i + 1`. Return the highest altitude visited after all gains are applied.

## Solutions

### 1) Prefix-sum (implemented)
- Idea: track the running sum; since the starting-altitude is `0`, initialize `max` to `0`. Update `max` whenever the prefix sum exceeds it.
- Time: O(n) — a single pass through `gain`.
- Space: O(1) — only two scalars for `prefixSum` and `max`.

## Test Cases

- Example 1: `gain = [-5, 1, 5, 0, -7]` → altitudes `[0, -5, -4, 1, 1, -6]`, highest `1`.
- Example 2: `gain = [-4, -3, -2, -1, 4, 3, 2]` → highest remains `0`.
- Edge: all positive gains (monotonic climb).
- Edge: all negative gains (highest altitude stays `0`).
- Edge: zero gains (altitude constant `0`).
- Edge: alternating ups and downs to confirm prefix sum resets.

## Mistakes And Lessons

- None yet.

## Other Useful Notes

- The initial altitude is guaranteed to be `0`, so we never need to consider a lower starting point.
