# Targeted Practice Drills

Warm-up exercises organized by pattern. Do 2-3 of these before tackling new problems.

---

## Sliding Window Drills

### Fixed-Size Window
**Goal**: Compute something for every subarray of size `k`.

```typescript
// Drill 1: Maximum in every subarray of size k
function maxSlidingWindow(nums: number[], k: number): number[]

// Drill 2: Count subarrays with exactly k distinct elements
function countSubarraysWithKDistinct(nums: number[], k: number): number

// Drill 3: Longest subarray with sum ≤ k (LeetCode 1493 variant)
function longestSubarrayWithSumLimit(nums: number[], limit: number): number
```

### Variable-Size Window
**Goal**: Grow/shrink window based on a condition.

```typescript
// Drill 4: Longest substring with at most k distinct characters
function longestSubstringWithAtMostKDistinct(s: string, k: number): number

// Drill 5: Minimum window subsequence (harder)
function minWindowSubsequence(s: string, t: string): string

// Drill 6: Longest subarray with ones after replacing at most k zeros
function longestOnesWithKFlips(nums: number[], k: number): number
```

---

## Two Pointers Drills

### Opposite Direction
**Goal**: Use pointers moving toward each other.

```typescript
// Drill 7: Check if string is palindrome (ignore non-alphanumeric)
function isPalindrome(s: string): boolean

// Drill 8: Reverse string in place (return the string)
function reverseString(s: string): string

// Drill 9: Check if two strings are close (LeetCode 1657)
function closeStrings(word1: string, word2: string): boolean
```

### Same Direction (Partition)
**Goal**: One pointer scans, another marks the partition boundary.

```typescript
// Drill 10: Move all zeros to end (LeetCode 283)
function moveZeroes(nums: number[]): void

// Drill 11: Remove duplicates in place (return new length)
function removeDuplicates(nums: number[]): number

// Drill 12: Partition array so elements < pivot come first
function partitionArray(nums: number[], pivot: number): number
```

### Fast/Slow
**Goal**: Two pointers move at different speeds.

```typescript
// Drill 13: Find middle of linked list (if list available)
// For arrays: find median of sorted merge of two sorted arrays
function findMedianSortedArrays(nums1: number[], nums2: number[]): number

// Drill 14: Detect cycle in array simulation (find duplicate)
function findDuplicate(nums: number[]): number
```

---

## Hashing Drills

### Frequency Counting
```typescript
// Drill 15: Check if frequency of each character is unique
function uniqueFrequency(s: string): boolean

// Drill 16: Find all anagrams of pattern in text
function findAnagrams(text: string, pattern: string): number[]

// Drill 17: Group anagrams by signature
function groupAnagrams(strs: string[]): string[][]
```

### Prefix Hash
```typescript
// Drill 18: Subarray sums equal to k (including negative numbers)
function subarraySum(nums: number[], k: number): number

// Drill 19: Longest subarray with exactly k distinct (extend 1679)
function longestSubarrayWithKDistinct(nums: number[], k: number): number
```

---

## Greedy Threshold / Invariant Drills

### Existence Problems
```typescript
// Drill 20: LIS length-3 existence (LeetCode 334)
// Already implemented - but try without looking at solution
function increasingTriplet(nums: number[]): boolean

// Drill 21: Can place flowers (LeetCode 605)
// Already implemented - try binary search on answer

// Drill 22: Find if pattern exists: x < y > z (peak detection)
function validMountainArray(arr: number[]): boolean
```

### Threshold Tracking
```typescript
// Drill 23: Given array, can you form sum ≥ k using at most 2 elements?
function canFormSumK(nums: number[], k: number): boolean

// Drill 24: Track smallest and second smallest values seen so far
function trackSmallestTwo(nums: number[]): number
```

---

## Prefix/Suffix Precomputation Drills

```typescript
// Drill 25: Build prefix sum array, then answer range sum queries
class PrefixSum {
  constructor(nums: number[])
  query(left: number, right: number): number
}

// Drill 26: Product of array except self (LeetCode 238)
// Already implemented - redo without reading your old solution

// Drill 27: Find pivot index (LeetCode 724)
// Already implemented - redo
```

---

## String Normalization Drills

```typescript
// Drill 28: Reverse words - my version first, then builtin-free
function reverseWords(s: string): string

// Drill 29: Trim and collapse multiple spaces to single space
function normalizeSpaces(s: string): string

// Drill 30: String compression (count consecutive chars)
function compressString(s: string): string
```

---

## Quick Warm-Up Routine (15 min)

Before a practice session, pick **one drill from each row**:

| # | Drill | Pattern |
|---|-------|---------|
| 1 | Palindrome check | Two Pointers |
| 2 | Move zeros | Two Pointers |
| 3 | Max in sliding window | Sliding Window |
| 4 | Unique frequency | Hashing |
| 5 | Track smallest two | Greedy Thresholds |

Total: 5 drills × ~3 min each = 15 minutes

---

## Drill Completion Log

Mark completed drills:

- [ ] Drill 1: maxSlidingWindow
- [ ] Drill 2: countSubarraysWithKDistinct
- [ ] Drill 3: longestSubarrayWithSumLimit
- [ ] Drill 4: longestSubstringWithAtMostKDistinct
- [ ] Drill 5: minWindowSubsequence
- [ ] Drill 6: longestOnesWithKFlips
- [ ] Drill 7: isPalindrome
- [ ] Drill 8: reverseString
- [ ] Drill 9: closeStrings
- [ ] Drill 10: moveZeroes
- [ ] Drill 11: removeDuplicates
- [ ] Drill 12: partitionArray
- [ ] Drill 13: findMedianSortedArrays
- [ ] Drill 14: findDuplicate
- [ ] Drill 15: uniqueFrequency
- [ ] Drill 16: findAnagrams
- [ ] Drill 17: groupAnagrams
- [ ] Drill 18: subarraySum
- [ ] Drill 19: longestSubarrayWithKDistinct
- [ ] Drill 20: increasingTriplet
- [ ] Drill 21: canPlaceFlowers
- [ ] Drill 22: validMountainArray
- [ ] Drill 23: canFormSumK
- [ ] Drill 24: trackSmallestTwo
- [ ] Drill 25: PrefixSum class
- [ ] Drill 26: productExceptSelf
- [ ] Drill 27: pivotIndex
- [ ] Drill 28: reverseWords
- [ ] Drill 29: normalizeSpaces
- [ ] Drill 30: compressString

---

*For pattern reference, see [PATTERNS.md](./PATTERNS.md).*
