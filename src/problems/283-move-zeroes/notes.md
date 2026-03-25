# 283. Move Zeroes

- Link: https://leetcode.com/problems/move-zeroes
- Difficulty: easy
- Pattern: Two Pointers

## Question Summary

Move all zeroes in an array to the end while keeping the relative order of non-zero elements, and do it in-place.

## Solutions

### 1) Two pointers (implemented)
- Idea: `right` scans each element. `left` tracks next index to place a non-zero. When `nums[right] !== 0`, swap with `nums[left]` and advance `left`.
- Time: O(n)
- Space: O(1)

## Test Cases

- Example: `[0,1,0,3,12]` → `[1,3,12,0,0]`
- Single element zero
- No zeros
- All zeros
- Zeros already at end
- Interleaved zeros

## Mistakes And Lessons

- Lesson: in this problem, one loop is enough because each iteration processes one element.
- Lesson: keep pointer roles separate even in one loop:
  - `right` = scan pointer
  - `left` = placement pointer

## Other Useful Notes

- This is a stable partition of non-zero vs zero values done in-place.
- Swapping when `left === right` is harmless and keeps code simple.
