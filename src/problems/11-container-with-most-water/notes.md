# 11. Container With Most Water

- Link: https://leetcode.com/problems/container-with-most-water
- Difficulty: medium
- Pattern: Two Pointers

## Question Summary

Given line heights, choose two lines that with the x-axis form a container holding the maximum water.

## Solutions

### 1) Two pointers from both ends (implemented)
- Idea: start with widest container (`left = 0`, `right = n - 1`). Area is `min(h[left], h[right]) * (right - left)`. Move the shorter side inward each step.
- Time: O(n)
- Space: O(1)

## Test Cases

- Example: `[1,8,6,2,5,4,8,3,7]` → `49`
- Minimal: `[1,1]` → `1`
- Equal heights
- Strictly increasing / decreasing
- Case where best answer is not at edges

## Mistakes And Lessons

- Lesson: width always decreases; each move must try to improve the bottleneck height (`min(left, right)`).
- Lesson: moving the taller side cannot improve bottleneck when width shrinks, so move the shorter side.

## Other Useful Notes

- Core formula: `area = min(h[l], h[r]) * (r - l)`
- Dominance reasoning: if `h[l] <= h[r]`, any pair with same `l` and smaller `r` cannot beat current area.
