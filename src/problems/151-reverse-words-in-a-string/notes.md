# 151. Reverse Words In A String

- Link: https://leetcode.com/problems/reverse-words-in-a-string
- Difficulty: Medium
- Pattern: String Parsing, Two Pointers

## Question Summary

Given a string that may contain leading/trailing/multiple spaces, return the words in reversed order with exactly one space between words.

## Solutions

### 1) Parse words and prepend (implemented)
- Idea:
  - Scan string once, build current word.
  - When word ends, prepend it to result list.
  - Join by one space at the end.
- Time: `O(n^2)` in JS due to repeated `unshift` shifting elements.
- Space: `O(n)` for collected words.

### 2) Follow-up style: normalize + reverse all + reverse each word (implemented)
- Idea:
  - Build clean char array first (trim and collapse spaces while parsing).
  - Reverse whole array.
  - Reverse each word segment.
- Time: `O(n)`
- Space: `O(n)` in TypeScript due to mutable char buffer simulation.
  If input were mutable char array and output ignored, auxiliary space can be discussed as `O(1)`.

## Test Cases

- Example: `"the sky is blue"` -> `"blue is sky the"`
- Example: `"  hello world  "` -> `"world hello"`
- Example: `"a good   example"` -> `"example good a"`
- Edge: all spaces
- Edge: single word with padding
- Edge: empty string
- Edge: one word without spaces

## Mistakes And Lessons

- Lesson: build clean intermediate string/array first while parsing.
  - Why it helped: once spaces are normalized early, reverse steps become straightforward and less error-prone.

- Lesson: think carefully about pointer boundary conditions (`left < right` vs `left <= right`).
  - Previous code context:
    ```ts
    while (left <= right && s[left] === " ") left++;
    while (left <= right && s[right] === " ") right--;
    ```
  - Why it matters: wrong boundary conditions create infinite loops or off-by-one bugs.

## Other Useful Notes

- Reversal helper template:
  ```ts
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left += 1;
    right -= 1;
  }
  ```
- `trim/split/join` are convenient, but typically count as `O(n)` extra space in JS/TS.
