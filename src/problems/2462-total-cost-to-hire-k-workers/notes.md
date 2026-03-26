# 2462. Total Cost to Hire K Workers

- Link: https://leetcode.com/problems/total-cost-to-hire-k-workers/
- Difficulty: medium
- Pattern: Two Heaps / Greedy
- Date: 2026-03-25

## Question Summary

Hire exactly k workers from costs array. In each session, pick the cheapest from first `candidates` or last `candidates` workers (ties broken by smallest index). Return total cost.

## Solutions

### 1) Two Min-Heaps (-- implemented)
- **Idea**: Maintain two min-heaps - one for left candidates, one for right. Always pick the cheaper front element. When one heap is exhausted, only pick from the other.
- **Time**: O((k + candidates) × log candidates)
- **Space**: O(candidates)

## Test Cases

- ✅ `costs=[17,12,10,2,7,2,11,20,8], k=3, candidates=4` → 11
- ✅ `costs=[1,2,4,1], k=3, candidates=3` → 4
- ✅ `costs=[1,2,3], k=2, candidates=5` → 3 (candidates >= length)
- ✅ `costs=[5], k=1, candidates=1` → 5 (single element)

## Mistakes And Lessons

- **Typo: `rightHeap[right]!` instead of `costs[right]!`**
  - Lesson: Always verify array access is from correct array
  - Context: `rightHeap[right]` would access the heap object with numeric key, not the costs array

## Other Useful Notes

- **Two-heap pattern**: When selection comes from two sources (left/right ends), two heaps with two pointers is a common approach
- **Infinity trick**: When one heap is empty, use `Infinity` to force selection from the other heap
- **Tie-breaking**: Using `<=` for left candidate ensures left wins on tie (matching problem's smallest index requirement)
