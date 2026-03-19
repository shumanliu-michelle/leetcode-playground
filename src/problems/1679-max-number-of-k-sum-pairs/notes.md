# 1679. Max Number Of K-Sum Pairs

- Link: https://leetcode.com/problems/max-number-of-k-sum-pairs
- Difficulty: Medium
- Pattern: Sorting + Two Pointers

## Question Summary

Given an integer array and target `k`, repeatedly remove disjoint pairs whose sum is `k`, and return the maximum number of such operations.

## Solutions

### 1) Sort + two pointers (implemented)
- Idea:
  - Sort ascending.
  - Use `left` and `right` pointers.
  - If sum is too small, increase `left`; if too large, decrease `right`.
  - If sum equals `k`, count one operation and move both pointers (pair consumed).
- Time: `O(n log n)`
- Space: `O(1)` auxiliary (ignoring sort internals)

### 2) Hash map counting (implemented)
- Idea:
  - For each number `x`, check if `k - x` is available from previous unmatched values.
  - If available, consume it and increment count; otherwise store `x`.
- Time: `O(n)`
- Space: `O(n)`

## Test Cases

- Example: `[1,2,3,4], k=5` -> `2`
- Example: `[3,1,3,4,3], k=6` -> `1`
- Edge: no valid pairs
- Edge: all values can pair
- Edge: negative values
- Edge: duplicates with odd frequencies

## Mistakes And Lessons

- Lesson: when sum equals `k`, move both pointers because both elements are consumed in one operation.
- Lesson: `nums.sort()` needs numeric comparator (`(a, b) => a - b`) for number arrays.

## Other Useful Notes

- `O(n)` (hash map) is asymptotically better than `O(n log n)` (sorting), but sorting + two pointers is often simpler to reason about.
