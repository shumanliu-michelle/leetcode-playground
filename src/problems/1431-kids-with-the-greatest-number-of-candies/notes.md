# 1431. Kids With The Greatest Number Of Candies

- Link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
- Difficulty: easy
- Pattern: Array Scan, Threshold Check

## Question Summary

Given `candies[i]` and `extraCandies`, return a boolean array where each index says whether giving all extra candies to that kid would make them reach at least the current maximum candies among all kids.

## Solutions

### 1) Two-pass threshold approach (implemented)
- Idea: first pass compute `maxCandies`. Second pass for each kid check `candies[i] + extraCandies >= maxCandies`.
- Time: O(n)
- Space: O(1) auxiliary, O(n) including output

## Test Cases

- Example: `[2,3,5,1,3]`, `extra=3` → `[true,true,true,false,true]`
- Example: `[4,2,1,1,2]`, `extra=1` → `[true,false,false,false,false]`
- Example: `[12,1,12]`, `extra=10` → `[true,false,true]`
- Edge: all equal values
- Edge: `extraCandies = 0`
- Edge: one clear maximum that still remains unique

## Mistakes And Lessons

- Missed test case: `extraCandies = 0`.
  - Lesson: include zero-effect scenarios to verify the logic reduces to plain max comparison.

- Missed test case: all kids start equal.
  - Lesson: include tie-heavy cases to verify `>=` behavior and avoid accidental strict `>` logic.

## Other Useful Notes

- The `>=` comparison is essential because multiple kids can share the greatest value.
