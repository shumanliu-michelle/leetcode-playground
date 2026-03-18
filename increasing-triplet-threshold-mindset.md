# Increasing Triplet: Core Mindset

## Core Mindset

Do not track one fixed triplet.
Track minimal **state/invariants** that prove existence.

- `first`: smallest value seen so far
- `second`: smallest possible middle value seen so far that is greater than some valid `first`

Scan left to right:

1. If `x <= first`, set `first = x`
2. Else if `x <= second`, set `second = x`
3. Else, `x > second` => triplet exists (`first < second < x`)

Interpretation:
- Holding a value in `second` means you already have a valid increasing subsequence of length 2.
- `second` is the best (smallest) tail seen so far for length-2 subsequences.
- This is why a later `x > second` proves a length-3 subsequence exists.

Generalization:
- Extend this idea with `tails[k]` = smallest possible tail for an increasing subsequence of length `k + 1`.
- This mindset scales from triplet detection to “does length `n` increasing subsequence exist?” and LIS-style reasoning.

## Reusable Checklist (Existence Problems)

1. Am I proving existence with minimal state instead of constructing one fixed answer?
2. What invariant should be true after each scan step?
3. Can I replace a candidate with a better threshold without losing correctness?
4. What event means I can return early with certainty?

## Quick Drill

- Practice this invariant style on:
  - LIS-length-2/3 style checks
  - monotonic condition detection
  - “is there any pattern x<y<z” boolean problems
