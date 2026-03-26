# 2542. Maximum Subsequence Score

- Link: https://leetcode.com/problems/maximum-subsequence-score
- Difficulty: medium
- Pattern: Heap / Top K / Greedy with Sorting
- Date: 2026-03-25

## Question Summary

Choose a subsequence of length k from two arrays nums1 and nums2. Score = sum(nums1[i]) * min(nums2[i]). Return maximum score.

## Solutions

### 1) Sort + Min-Heap (-- implemented)
- **Idea**: Sort pairs by nums2 descending. As we sweep, current nums2 is the minimum. Maintain min-heap (size k-1) to keep largest nums1 values seen so far.
- **Time**: O(n log n)
- **Space**: O(n)

```typescript
// sort pairs by nums2 desc
// iterate, maintain min-heap on nums1 (evict smallest, keep k-1 largest)
// when heap has k-1: score = (sum + current_num1) * current_nums2
```

## Test Cases

- ✅ `nums1=[1,3,3,2], nums2=[2,1,3,4], k=3` → 12
- ✅ `nums1=[4,2,3,1,1], nums2=[7,5,10,9,6], k=1` → 30

## Mistakes And Lessons

- **Treating min candidate as if other k-1 elements can come from anywhere**
  - Lesson: Other k-1 elements must have nums2 >= candidate. Sort by nums2 to guarantee this.
  - Context: When nums2[i] is minimum, all other elements must have nums2 >= nums2[i]
- **Nested loops recomputing from scratch**
  - Lesson: "Can I reuse previous computation instead of restarting?"
  - Context: O(n² log k) → O(n log n) by sweeping once

## Other Useful Notes

**General Template for Top K Problems**:
```
sort by some key

for each element:
    add candidate
    keep top k using min heap
    compute answer
```

**Key Pattern Recognition**:
- Top K problems
- Greedy with constraints
- "maximize sum with condition"
- Don't recompute — reuse work

**Interview Red Flag**: If you see nested loops, ask: "Can I reuse previous computation instead of restarting?"
