# Common Mindset Gaps And Drills

## Core Mindset 1: Normalize First, Then Transform

When input has formatting noise (spaces, delimiters, edge markers), normalize first.
Then run the core transformation logic on clean data.

- Typical use case: string parsing with leading/trailing/multiple spaces
- Benefit: fewer edge-case branches later

## Core Mindset 2: Track Invariants, Not Fixed Final Picks

For existence/boolean subsequence problems, maintain minimal state that proves existence.
Do not lock onto one fixed candidate too early.

- Example pattern: maintain threshold variables (`first`, `second`) instead of constructing exact triplet immediately
- Interpretation: reaching `second` means a valid length-2 increasing candidate exists; `second` is the best (smallest) tail for that length.
- Generalization: use `tails[k]` as the smallest tail for subsequence length `k + 1` to reason about length-`n` increasing subsequences.

## Core Mindset 3: Loop Condition Design First

Before writing loop body, define loop contract:

1. What condition keeps the loop safe?
2. What guarantees progress each iteration?
3. What boundary relation is correct (`<` vs `<=`)?

Then write the body.

## Core Mindset 4: Bounds Check Before Indexing

For arrays/strings:

- Prefer `while (i < n && arr[i] ...)` over `while (arr[i] ... && i < n)`
- Read index only after bounds are confirmed

## Frequent Mistakes To Watch

- Patching late-stage logic before validating early normalization assumptions
- Off-by-one in pointer loops (`left < right` vs `left <= right`)
- Missing pointer movement in some branches (risk of infinite loops)
- Skipping final flush step in parser-style loops

## Reusable Checklist

1. Did I normalize input when needed?
2. Did I write one invariant sentence for each loop/phase?
3. Are bounds checked before every indexed access?
4. Is loop progress guaranteed on every path?
5. Did I verify boundary cases for `<` vs `<=`?

## Quick Drill

Practice these on small focused problems:

- LIS-length-2/3 existence checks
- Monotonic condition detection
- Pattern existence like `x < y < z`
- String normalization + transform (trim/collapse/rebuild)
- Pointer boundary drills with length 0/1/minimal non-trivial cases
