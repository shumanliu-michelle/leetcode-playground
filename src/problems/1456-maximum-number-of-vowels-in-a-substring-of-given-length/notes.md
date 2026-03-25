# 1456. Maximum Number Of Vowels In A Substring Of Given Length

- Link: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
- Difficulty: easy
- Pattern: Sliding Window

## Question Summary

Given a string `s` and window size `k`, find the maximum number of vowels inside any contiguous substring of length `k`. Vowels are `a, e, i, o, u`.

## Solutions

### 1) Sliding window (implemented)
- Idea: keep a running vowel count for the current window, add the incoming character, subtract the outgoing one (if it was a vowel), and track the highest count seen.
- Time: O(n) — each character is examined exactly twice.
- Space: O(1) — only a constant-size `Set` and scalar counters.

## Test Cases

- Example 1: `s = "abciiidef", k = 3` → window `"iii"` has 3 vowels.
- Example 2: `s = "aeiou", k = 2` → any size-2 window hits 2 vowels.
- Edge: `s = "bcdfgh", k = 3` → no vowels, expect 0.
- Edge: `s = "aeiou", k = 5` → whole string, expect 5.
- Edge: `s = "leetcode", k = 1` → single window, expect 1.

## Mistakes And Lessons

- None yet.

## Other Useful Notes

- Inputs guarantee `1 <= k <= s.length`, so the initial window always exists.
