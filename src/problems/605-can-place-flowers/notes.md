# 605. Can Place Flowers

- Link: https://leetcode.com/problems/can-place-flowers
- Difficulty: easy
- Pattern: Greedy

## Question Summary

Given a binary array `flowerbed` (no adjacent existing flowers) and integer `n`, can you plant `n` more flowers without ever placing flowers in adjacent plots?

## Solutions

### 1) Single-pass greedy with neighbor checks (implemented)
- Idea: scan left to right. At each index, plant only if current is `0` and both neighbors are empty or out of bounds. When planted, set `flowerbed[i] = 1` and decrement `n`. Early return `true` when `n === 0`.
- Time: O(L) where L = flowerbed.length
- Space: O(1) auxiliary

### 2) Two-pass variant (alternative)
- Idea: first pass greedily plants while skipping indices. Second pass validates adjacency constraints.
- Time: O(L)
- Space: O(1) auxiliary
- Note: harder to reason about and easier to introduce corner-case bugs than approach #1.

## Test Cases

- Example: `[1,0,0,0,1], n=1` → `true`
- Example: `[1,0,0,0,1], n=2` → `false`
- Edge: `n=0` always returns `true`
- Edge: `[1,0,0,0,0,1], n=2` → `false`
- Edge: `[1,0,0,0,0,1], n=1` → `true`
- Edge: all empty plots, e.g. `[0,0,0,0], n=2` → `true`
- Edge: single plot `[0], n=1` → `true`; `[1], n=1` → `false`

## Mistakes And Lessons

- Mistake: forgetting to mark a planted spot.
  - Previous context:
    ```ts
    if (canPlant) {
      n--;
    }
    ```
  - Lesson: after planting, always mutate state (`flowerbed[i] = 1`) so later checks are accurate.

- Mistake: under-testing early-exit and boundary-heavy cases.
  - Missed tests: `n = 0`, `[1,0,0,0,0,1], n = 2`
  - Lesson: always include at least one early-exit case and one near-boundary impossible case.

## Other Useful Notes

- Cleanest condition at index `i`:
  - `flowerbed[i] === 0`
  - `(i === 0 || flowerbed[i - 1] === 0)`
  - `(i === L - 1 || flowerbed[i + 1] === 0)`
- This problem is a strong example of local greedy decisions being globally valid.
