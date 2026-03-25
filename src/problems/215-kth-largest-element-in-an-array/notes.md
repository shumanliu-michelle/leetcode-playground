# 215. Kth Largest Element In An Array

- Link: https://leetcode.com/problems/kth-largest-element-in-an-array
- Difficulty: medium
- Pattern: Heap / Top K
- Date: 2026-03-25

## Question Summary

Given an integer array `nums` and an integer `k`, return the **kth largest element** in the sorted order (not the kth distinct element).

Can you solve it without sorting?

## Solutions

### 1) Min-Heap (-- implemented)
- Idea: Keep a min-heap of size k. The root is always the kth largest. Insert each element, evict smallest if size exceeds k.
- Time: O(n log k)
- Space: O(k)

### 2) Quickselect (-- optimal)
- **Idea**: Based on quicksort's partition scheme. After partitioning, pivot is at its final sorted position. Recurse only into the side containing the target.
- **How it works**:
  1. Pick a pivot (e.g., last element)
  2. Partition: rearrange so all `< pivot` are left, all `> pivot` are right, pivot at index `p`
  3. Compare `p` to target index `n-k` (kth largest position in sorted array):
     - `p == n-k`: found, return pivot
     - `p < n-k`: recurse right side
     - `p > n-k`: recurse left side
- **Example**: `[3,2,1,5,6,4], k=2` → target index = 4 (2nd largest in sorted `[1,2,3,4,5,6]`)
  - Partition with pivot=4: `[3,2,1] + [4] + [5,6]`, pivot at index 3
  - `3 < 4`, so recurse right into `[5,6]`, continue until pivot lands at index 4
- **Complexity**: Average O(n) (each partition reduces problem size), worst O(n²) if pivot poorly chosen
- **Space**: O(1) auxiliary

### 3) Counting Sort (-- range-constrained)
- Idea: Since nums[i] is bounded (-10^4 to 10^4), use counting sort. Build frequency array, iterate from max to find kth largest.
- Time: O(n + R) where R = max - min ≤ 20000
- Space: O(R)

## Test Cases

- ✅ `[3,2,1,5,6,4], k=2` → 5
- ✅ `[3,2,3,1,2,4,5,5,6], k=4` → 4
- ✅ `k=1` (max) → root of min-heap correctly returns largest
- ✅ `k=n` (min) → heap size n, returns smallest
- ❌ Duplicates: `[5,5,5,5], k=2` → returns 5 (not distinct) — kth largest is position-based, not distinct-value-based

## Mistakes And Lessons

- Initially thought to use max-heap, but that would evict largest elements instead of smallest
  - Lesson: For kth largest, use min-heap so we can efficiently remove the smallest candidates
  - Context: `minHeap.dequeue()` evicts smallest, keeping k largest

## Other Useful Notes

- **Heap choice**: Min-heap for kth largest, max-heap for kth smallest
- **Heap size invariant**: After processing n elements, min-heap of size k contains the k largest elements seen, with root = kth largest
- **Library**: `@datastructures-js/priority-queue` provides clean API with `enqueue`, `dequeue`, `front`, `size`
