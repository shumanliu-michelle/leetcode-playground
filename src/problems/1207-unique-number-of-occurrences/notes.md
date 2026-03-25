# 1207. Unique Number Of Occurrences

- Link: https://leetcode.com/problems/unique-number-of-occurrences
- Difficulty: easy
- Pattern: Hash Map

## Question Summary

Return `true` if every number in `arr` appears a unique number of times, otherwise `false`.

## Solutions

### 1) Hash-map (implemented)
- Idea: count the frequency of each value, then verify that the collected counts are themselves unique by pushing them into a `Set`. Comparing the size of the `Set` to the number of distinct values determines uniqueness.
- Time: O(n) — single pass to build counts.
- Space: O(n) — the frequency `Map` and auxiliary `Set` grow proportional to the number of distinct values.

## Test Cases

- Example 1: `[1,2,2,1,1,3]` → true (counts `3,2,1`).
- Example 2: `[1,2]` → false (counts `1,1` collide).
- Example 3: `[-3,0,1,-3,1,1,1,-3,10,0]` → true (negatives handled).
- Edge: all identical values still return `true` because there is only one count.
- Edge: all unique but counts collide (`[1,2,3,4]` → false).
- Edge: zeros involved with repeated counts.

## Mistakes And Lessons

- None yet.

## Other Useful Notes

- The result order doesn't matter because we rely only on the sizes of the `Map` and `Set`.
