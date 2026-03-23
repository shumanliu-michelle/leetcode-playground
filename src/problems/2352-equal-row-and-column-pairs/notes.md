# 2352-equal-row-and-column-pairs

- Link: https://leetcode.com/problems/equal-row-and-column-pairs
- Difficulty: medium
- Pattern: Hashing

## Problem
Count how many pairs `(r, c)` satisfy `grid[r] == column[c]`, where `column[c]` is the `c`th column vector.

## Solutions
### Stringified row map `equalPairs(grid: number[][]): number`
- Summary: serialize each row to a string and count occurrences. Then build each column string and accumulate how many rows share the same serialized value by looking it up in the map.
- Time: O(n^2) — we visit each cell a constant number of times.
- Space: O(n^2) in the worst case due to storing row keys, though keys themselves are only length `n`.

## Test Cases
- Example 1: `grid = [[3,2,1],[1,7,6],[2,7,7]]` → only column 0 matches row 2.
- Example 2: `grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]` → three matches when multiple rows equal column 2 or 3.
- Edge: all rows identical produces `n^2` matches because every column equals every row.
- Edge: no matches when rows and columns never align.

## Mistakes And Lessons
- None yet.

## Other Useful Notes
- Because the grid is square (`grid.length == grid[i].length`), every column size matches the row size and can be serialized the same way.
