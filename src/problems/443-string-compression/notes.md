# 443. String Compression

- Link: https://leetcode.com/problems/string-compression
- Difficulty: Medium
- Pattern: Two Pointers, Run-Length Encoding

## Question Summary

Given a character array, compress consecutive repeated characters in-place by writing each character followed by its count when count > 1, and return the new length.

## Solutions

### 1) Two pointers with run processing (implemented)
- Idea:
  - `right` scans and consumes one full run of same characters.
  - `left` writes compressed output for that run.
  - Write character always; write digits of count only when count > 1.
- Time: `O(n)`
- Space: `O(1)` auxiliary

## Test Cases

- Example: `["a","a","b","b","c","c","c"]` -> length `6`, chars `["a","2","b","2","c","3"]`
- Single char
- Count >= 10 (digit splitting)
- Mixed runs like `["a","a","a","b","b","a","a"]`

## Mistakes And Lessons

- Mistake: mixing loop roles (outer and inner responsibilities).
  - Lesson: keep “process one run” in outer loop and “consume chars in run” in inner loop.

- Mistake: mixing pointer responsibilities.
  - Lesson: keep `right` for reading runs and `left` for writing output only.

## Other Useful Notes

- Run invariant:
  - before each outer iteration, `right` points to next unprocessed run start
  - `chars[0..left-1]` already contains valid compressed output
