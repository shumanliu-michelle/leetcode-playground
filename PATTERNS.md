# LeetCode Patterns Reference

A consolidated guide of core problem-solving patterns encountered in this repo.

---

## Sliding Window

### Core Mindset
Maintain a window that slides over the data while tracking state. Shrink when constraint is violated, expand to grow valid window.

### Key Invariants
- Window satisfies the problem's condition at all times
- Each element enters and leaves the window at most once → O(n)

### Common Failure Modes
- Shrinking condition checked after expanding (off-by-one)
- Not moving `left` forward when shrinking
- Using `>` when `<=` is needed (or vice versa)

### Representative Problems
- [1004. Max Consecutive Ones III](./src/problems/1004-max-consecutive-ones-iii/)
- [1493. Longest Subarray of 1's After Deleting One Element](./src/problems/1493-longest-subarray-of-1s-after-deleting-one-element/)
- [1456. Maximum Number of Vowels in a Substring of Given Length](./src/problems/1456-maximum-number-of-vowels-in-a-substring-of-given-length/)
- [643. Maximum Average Subarray I](./src/problems/643-maximum-average-subarray-i/)

---

## Two Pointers

### Core Mindset
Use two pointers to explore the array from different directions or positions, reducing brute-force O(n²) to O(n).

### Key Invariants
- Pointers move toward each other (opposite directions) OR
- Pointers move in same direction with different speeds (fast/slow)

### Variants
1. **Opposite direction**: palindrome check, reverse array
2. **Same direction**: partition, remove duplicates
3. **Fast/Slow**: cycle detection, median finding

### Common Failure Modes
- Off-by-one on loop condition (`<` vs `<=`)
- Forgetting to move one pointer
- Not handling empty or single-element edge cases

### Representative Problems
- [11. Container With Most Water](./src/problems/11-container-with-most-water/)
- [283. Move Zeroes](./src/problems/283-move-zeroes/)
- [345. Reverse Vowels of a String](./src/problems/345-reverse-vowels-of-a-string/)

---

## Hashing

### Core Mindset
Trade space for time by using a hash map/set to enable O(1) lookups instead of O(n) scans.

### Key Invariants
- The hash key captures what you're grouping or comparing
- Build the hash structure first, then query

### Common Failure Modes
- Forgetting to handle duplicate keys
- Not normalizing data before hashing (e.g., string case)
- Mutable keys (don't use arrays/objects as map keys)

### Representative Problems
- [2352. Equal Row and Column Pairs](./src/problems/2352-equal-row-and-column-pairs/)
- [1207. Unique Number of Occurrences](./src/problems/1207-unique-number-of-occurrences/)
- [2215. Find the Difference of Two Arrays](./src/problems/2215-find-the-difference-of-two-arrays/)

---

## Greedy Thresholds / Invariant Tracking

### Core Mindset
Track minimal state that proves existence without constructing the exact answer. Maintain "best so far" thresholds rather than locked candidates.

### Key Invariants
- `first` / `second` / `tails[k]` represent best (smallest) tail for subsequence length
- Reaching a threshold proves a valid pattern exists
- Updating to a smaller threshold never hurts correctness

### Common Failure Modes
- Trying to lock one fixed candidate too early
- Not recognizing that `second` means a valid length-2 subsequence exists
- Forgetting that order matters (indices must increase)

### Representative Problems
- [334. Increasing Triplet Subsequence](./src/problems/334-increasing-triplet-subsequence/)
- [334 mindset notes](./increasing-triplet-threshold-mindset.md)

---

## Prefix / Suffix Precomputation

### Core Mindset
Precompute information about what's on the left (prefix) or right (suffix) of each index, then combine to answer queries.

### Key Invariants
- `prefix[i]` = answer for subarray `[0, i)`
- `suffix[i]` = answer for subarray `[i, n)`
- Combine prefix and suffix at the "gap" position

### Common Failure Modes
- Off-by-one in prefix/suffix array construction
- Not handling the case where the split is at the edges
- Using prefix info after the array has been modified

### Representative Problems
- [724. Find Pivot Index](./src/problems/724-find-pivot-index/)
- [238. Product of Array Except Self](./src/problems/238-product-of-array-except-self/)

---

## String Normalization First

### Core Mindset
When input has formatting noise (spaces, delimiters, edge markers), normalize first. Then run the core logic on clean data.

### Key Invariants
- Normalization step handles all edge cases (leading/trailing/multiple spaces)
- Core logic runs on clean, consistent format

### Common Failure Modes
- Patching late-stage logic before validating normalization assumptions
- Missing a corner case in the normalization (e.g., empty string after trim)

### Representative Problems
- [151. Reverse Words in a String](./src/problems/151-reverse-words-in-a-string/)
- [443. String Compression](./src/problems/443-string-compression/)

---

## Loop Condition Design

### Core Mindset
Before writing a loop body, define the loop contract:

1. What condition keeps the loop safe?
2. What guarantees progress each iteration?
3. What boundary relation is correct (`<` vs `<=`)?

### Common Failure Modes
- Off-by-one in pointer loops
- Missing pointer movement in some branches (infinite loop risk)
- Not verifying boundary cases for final flush step

### Reusable Checklist
1. Are bounds checked before every indexed access?
2. Is loop progress guaranteed on every path?
3. Did I verify boundary cases for `<` vs `<=`?
4. Are all branches that could loop guaranteed to make progress?

---

## General Problem-Solving Checklist

1. Did I normalize input when needed?
2. Did I write one invariant sentence for each loop/phase?
3. Are bounds checked before every indexed access?
4. Is loop progress guaranteed on every path?
5. Did I verify boundary cases for `<` vs `<=`?
6. Can I use a hash map to avoid O(n²) scans?
7. Do I need prefix/suffix precomputation?
8. Am I proving existence with minimal state, or constructing the full answer?

---

*For detailed mindset drills, see [DRILLS.md](./DRILLS.md).*
