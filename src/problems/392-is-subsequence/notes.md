# 392. Is Subsequence

- Link: https://leetcode.com/problems/is-subsequence
- Difficulty: Easy
- Pattern: Two Pointers, Binary Search (Follow-up)

## Question Summary

Given strings `s` and `t`, determine whether `s` is a subsequence of `t` (characters of `s` appear in `t` in the same relative order, not necessarily contiguous).

## Solutions

### 1) Two pointers (implemented)
- Idea:
  - Use one pointer on `s` and one on `t`.
  - Scan `t`; whenever chars match, advance pointer on `s`.
  - If pointer on `s` reaches end, subsequence exists.
- Time: `O(|t|)`
- Space: `O(1)`

### 2) Follow-up for many incoming `s` queries (implemented)
- Idea:
  - Preprocess `t` into `char -> sorted indices` map.
  - For each char in query `s`, binary search the first index greater than previous matched index.
- Time:
  - Preprocess: `O(|t|)`
  - Per query: `O(|s| log |t|)` (more precisely by char-frequency bucket)
- Space: `O(|t|)` for index map

## Test Cases

- Example true: `s="abc"`, `t="ahbgdc"`
- Example false: `s="axc"`, `t="ahbgdc"`
- Edge: empty `s`
- Edge: empty `t`
- Repeated chars true/false
- Follow-up batch queries against one fixed `t`

## Mistakes And Lessons

- Lesson: for one query, two pointers is simplest and optimal.
- Lesson: for many queries on fixed `t`, avoid rescanning `t`; preprocess once and binary search per char.

## Other Useful Notes

- After preprocessing map, per query maintain `prevIndex`.
- For each char in `s`, choose the first index `> prevIndex`; if not found, return `false`.
