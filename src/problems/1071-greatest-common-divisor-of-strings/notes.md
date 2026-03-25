# 1071. Greatest Common Divisor Of Strings

- Link: https://leetcode.com/problems/greatest-common-divisor-of-strings
- Difficulty: easy
- Pattern: String Pattern Validation

## Question Summary

Given `str1` and `str2`, return the longest string `x` such that repeating `x` builds both strings exactly.

## Solutions

### 1) Concatenation compatibility + length GCD (implemented)
- Idea: if `str1 + str2 !== str2 + str1`, no common divisor exists. Otherwise, the answer length is `gcd(str1.length, str2.length)` and the answer is the prefix of that length from `str1`.
- Time: O(n + m)
- Space: O(n + m) due to temporary concatenated strings in the equality check.

### 2) Candidate shrinking (alternative)
- Idea: start from the shorter string as candidate divisor, shrink by 1 and test whether both strings are fully built by that candidate.
- Time: O(m * n) as a loose upper bound.
- Space: temporary-string-dependent because repeated `slice` creates intermediate strings.

## Test Cases

- Example: `"ABCABC"` + `"ABC"` → `"ABC"`
- Example: `"ABABAB"` + `"ABAB"` → `"AB"`
- No common divisor: `"LEET"` + `"CODE"` → `""`
- Prefix exists but full repetition fails: `"AAAAAB"` + `"AAA"` → `""`
- Both equal: `"AAA"` + `"AAA"` → `"AAA"`
- GCD length greater than 1: `"XYZXYZXYZXYZ"` + `"XYZXYZ"` → `"XYZXYZ"`
- GCD length 1: `"AAAAA"` + `"A"` → `"A"`

## Mistakes And Lessons

- Mistake: checking chunk boundaries with off-by-one index logic.
  - Previous code context:
    ```ts
    for (let i = 0, j = divisor.length; j <= str1.length; i += divisor.length, j += divisor.length) {
      if (str1.slice(i, j) !== divisor) break;
      if (j === str1.length) gcdForStr1 = true;
    }
    ```
  - Lesson: repeated chunk loops are easy to get subtly wrong; boundary logic becomes fragile.

- Mistake: duplicated validation loops for `str1` and `str2`.
  - Lesson: duplication increases bug surface; prefer a cleaner property-based check.

## Other Useful Notes

- Key property: if two strings share a repeating base, concatenation is commutative: `str1 + str2 === str2 + str1`.
- Once compatibility holds, only length math remains — answer length is `gcd(len1, len2)`.
- Ways to validate "string is built by a base substring": rebuild by repeat count and compare, or use `split/join` with global replacement.
