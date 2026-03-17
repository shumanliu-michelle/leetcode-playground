# 1768. Merge Strings Alternately

- Link: https://leetcode.com/problems/merge-strings-alternately
- Difficulty: Easy
- Pattern: Two Pointers, String Construction

## Question Summary

Build a new string by alternating characters from `word1` and `word2` (starting with `word1`), then append any remaining suffix.

## Solutions

### 1) Single-index two pointers (implemented)
- Idea: move one index `i`; append `word1[i]` if valid, then `word2[i]` if valid.
- Time: `O(n + m)`
- Space: `O(n + m)`

### 2) Dual pointers with leftovers (alternative)
- Idea: alternate while both pointers are valid, then append leftovers.
- Time: `O(n + m)`
- Space: `O(n + m)`

## Test Cases

- examples: equal length, `word1` longer, `word2` longer
- edge: both empty
- edge: only one string non-empty
- edge: one-vs-many
- edge: repeated characters
- edge: mixed symbols

## Mistakes And Lessons

- Mistake: used repeated string concatenation in loops.
  - Previous context:
    ```ts
    let result = "";
    while (i < word1.length && j < word2.length) {
      result += word1[i];
      result += word2[j];
    }
    ```
  - Lesson: prefer array `push` + `join` for clearer construction.

- Mistake: wrote separate leftover loops, duplicating flow.
  - Previous context:
    ```ts
    if (i === word1.length) while (j < word2.length) result += word2[j];
    if (j === word2.length) while (i < word1.length) result += word1[i];
    ```
  - Lesson: one index with `while (i < a.length || i < b.length)` is simpler.

## Other Useful Notes

- Reusable trick: use one loop over max length with guard checks for each string.
