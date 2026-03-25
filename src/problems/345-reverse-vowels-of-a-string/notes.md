# 345. Reverse Vowels Of A String

- Link: https://leetcode.com/problems/reverse-vowels-of-a-string
- Difficulty: easy
- Pattern: Two Pointers

## Question Summary

Given a string, reverse only its vowels in-place order (support both lowercase and uppercase vowels) and return the resulting string.

## Solutions

### 1) Two pointers from both ends (implemented)
- Idea: use `left` and `right` pointers. Move each pointer until it reaches a vowel. Swap those two vowels, then move inward.
- Time: O(n)
- Space: O(n) (string converted to char array)

### 2) Collect-and-replace variant (alternative)
- Idea: collect all vowels in one pass. Refill vowel positions from the collected list in reverse order.
- Time: O(n)
- Space: O(n)

## Test Cases

- Example: `"IceCreAm"` → `"AceCreIm"`
- Example: `"leetcode"` → `"leotcede"`
- Edge: odd number of vowels
- Edge: even number of vowels
- Edge: no vowels (`"xyz"`)
- Edge: one vowel only in full string
- Edge: single-character string (`"a"`, `"b"`)
- Edge: mixed case vowels (`"hEllO"`)

## Mistakes And Lessons

- Missed test case category during review: single-character inputs.
  - Lesson: add smallest-boundary cases (`length = 1`) for pointer problems.

## Other Useful Notes

- Swap snippet reminder:
  - `[chars[left], chars[right]] = [chars[right], chars[left]]`
- You can also store only lowercase vowels in `Set` and compare with `.toLowerCase()`; both versions are valid.
