# 2336. Smallest Number In Infinite Set

- Link: https://leetcode.com/problems/smallest-number-in-infinite-set
- Difficulty: medium
- Pattern: Heap / Data Stream / Lazy Propagation
- Date: 2026-03-25

## Question Summary

Implement a set that contains all positive integers [1, 2, 3, ...] with two operations:
- `popSmallest()`: remove and return the smallest integer
- `addBack(num)`: add a positive integer back if it was previously popped

## Solutions

### 1) Set + Pointer (-- implemented, optimal for sequential data)
- **Idea**: Track removed numbers in a Set. Use a pointer `nextPop` to track the smallest number not yet removed. When a number is added back, update pointer if it's smaller.
- **Why it works**: Numbers are sequential starting from 1, so we can "skip" over removed numbers by incrementing pointer until we find one not in the Set.
- **popSmallest()**: Return `nextPop`, increment until finding number not in `popped` Set
- **addBack(num)**: If `num` was removed, delete from Set and update pointer if `num < nextPop`
- **Time**: O(1) amortized per operation
- **Space**: O(p) where p = numbers ever popped

### 2) HashSet + Heap (-- general-purpose, O(log n))
- **Idea**: Use a min-heap to store numbers that were popped then added back. Use pointer `currPointer` for sequential numbers never popped.
- **popSmallest()**: If heap not empty, pop from heap (these are smaller numbers added back). Otherwise return `currPointer++`.
- **addBack(num)**: If `num < currPointer` (was popped before), push to heap.
- **Time**: O(log n) per operation
- **Space**: O(n)

### 3) Comparison: When to Use Which

| Approach | popSmallest | addBack | Best When |
|----------|-------------|---------|-----------|
| Set + Pointer | O(1) amortized | O(1) | Numbers are sequential integers from 1 |
| HashSet + Heap | O(log n) | O(log n) | Non-sequential or arbitrary integers |

**Key insight**: The Set + Pointer solution exploits the problem structure (sequential positive integers) to achieve O(1) amortized. The heap solution is the general-purpose approach that works for any data type.

**popSmallest() walkthrough - Set + Pointer vs Heap**:

```
Set + Pointer:
  pop() → next = 1
         → while(next in popped) next++  ← potential loop (but O(1) amortized)

Heap approach:
  pop() → if heap not empty: return heap.popMin()  ← O(log n)
         → else: return next; next++               ← O(1), no loop
```

**Why no infinite loop in heap approach**:
- Numbers added back via `addBack()` are always < next (guaranteed by the `num < next` check)
- These get pushed to heap
- When heap has elements, we pop from heap (they're smaller than next)
- When heap is empty, next is guaranteed to be the smallest not-removed (no consecutive removed before it)

## Test Cases

- ✅ Example sequence: `addBack(2), pop(), pop(), pop(), addBack(1), pop(), pop(), pop()` → `[1, 2, 3, 1, 4, 5]`
- ✅ `addBack(1000)` when never popped → ignored
- ✅ `addBack(1)` after multiple pops → pointer resets to 1
- ✅ Multiple `addBack` of same number → only first one takes effect
- ✅ Duplicate `addBack` prevention via Set lookup

## Mistakes And Lessons

- Initially tried to use min-heap to store "available" numbers, but infinite set can't be materialized
  - Lesson: Track what was **removed**, not what remains. The "infinite" set is implicit via a pointer.
  - Context: `popped` Set tracks removed numbers; `nextPop` pointer represents the implicit infinite set
- Misunderstood problem initially - thought heap should contain all positive integers
  - Lesson: The "infinite" set is represented implicitly by `nextPop` pointer, not by storing all numbers
- `popSmallest()` loop concern: while loop could theoretically run forever
  - Clarification: In Set+Pointer, loop is O(1) amortized because each number is checked at most once across all operations
  - In Heap approach: guaranteed O(log n) worst case, no loop needed

## Other Useful Notes

- **Pattern recognition**: When dealing with "infinite" sequential data, consider tracking removals and using a pointer to represent the implicit sequence
- **Two-source pattern**: `popSmallest` often needs to pick from two sources (heap vs pointer) - heap for "added back", pointer for never-seen
- **Lazy data structure**: Representing "all positive integers" implicitly via `nextPop = 1, 2, 3...` is a common lazy data structure technique
