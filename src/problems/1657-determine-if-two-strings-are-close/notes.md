# 1657-determine-if-two-strings-are-close

- Link: https://leetcode.com/problems/determine-if-two-strings-are-close
- Difficulty: medium
- Pattern: Counting + multiset comparison

## Problem
Strings are “close” if they contain the same set of characters and their character-count multisets match after any number of swaps and replacements that replace all occurrences of a character at once.

## Solutions
### Map-based `closeStrings(word1: string, word2: string): boolean`
- Summary: build frequency maps for both words, sort the keys to ensure the alphabets match, then sort the values to compare frequency multisets.
- Time: O(n) - sorting a max length of 26 array considered constant.
- Space: O(1) for the maps and intermediate arrays (max length is 26 hence constant).

### Optimized `closeStringsOptimized(word1: string, word2: string): boolean`
- Summary: use fixed-size frequency arrays for 26 lowercase letters, compare presence via `freq[i] === 0`, and compare sorted frequency lists for final validation.
- Time: O(n) on the length of the words plus constant-time array work.
- Space: O(1) — the frequency arrays and sorted clones are constant-size.

## Test Cases
- Example 1: `"abc"` vs `"bca"` → true.
- Example 2: `"a"` vs `"aa"` → false.
- Frequency reshuffle: `"cabbba"` vs `"abbccc"` → true.
- Unique alphabet mismatch: `"aabbcc"` vs `"ddbbcc"` → false.
- Same alphabet but different distributions: `"abbccc"` vs `"cccbba"` → true.
- Disjoint characters: `"abc"` vs `"def"` → false.

## Mistakes And Lessons
- None yet.

## Other Useful Notes
- Both versions rely on the same two invariants; the optimized one keeps the logic constant in space by leveraging the fixed alphabet size.
