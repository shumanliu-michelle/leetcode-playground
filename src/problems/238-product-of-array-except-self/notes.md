# 238. Product Of Array Except Self

- Link: https://leetcode.com/problems/product-of-array-except-self
- Difficulty: medium
- Pattern: Prefix/Suffix Products

## Question Summary

Given an integer array `nums`, return an array `answer` where `answer[i]` is the product of all elements except `nums[i]`, without using division and in linear time.

## Solutions

### 1) Prefix + suffix in output array (implemented)
- Idea: first pass stores left product at each index. Second pass multiplies right product into each index.
- Time: O(n)
- Space: O(1) auxiliary (excluding output array)

### 2) Prefix array + suffix array (alternative)
- Idea: build full prefix and suffix arrays and combine per index.
- Time: O(n)
- Space: O(n) auxiliary

## Test Cases

- Example: `[1,2,3,4]` → `[24,12,8,6]`
- Example: `[-1,1,0,-3,3]` → `[0,0,9,0,0]`
- Edge: one zero (`[4,0,2]`)
- Edge: two zeros (`[0,5,0]`)
- Edge: all negatives (`[-1,-2,-3,-4]`)
- Edge: single element (`[7]`)

## Mistakes And Lessons

- Lesson: "except self" often signals two-direction accumulation.
  - Prefix data from left + suffix data from right usually avoids division and nested loops.

- Lesson: to meet follow-up space requirement, write prefix/suffix into the output array directly.
  - This keeps extra space constant while preserving linear time.

## Other Useful Notes

- Running-product template:
  - left pass: `result[i] = prefix`, then update `prefix *= nums[i]`
  - right pass: `result[i] *= suffix`, then update `suffix *= nums[i]`
