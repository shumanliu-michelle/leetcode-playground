# Review Command

Run a full code review on the user's solution in practice mode.

## Usage
`/check`

## Prompt

You are reviewing a LeetCode solution in **practice mode**. Run a thorough code review focusing on:

### Review Checklist

**1. Correctness & Edge Cases**
- Does the solution handle all edge cases?
- Are boundary conditions correct (`<` vs `<=`)?
- Does it handle empty inputs, single elements, duplicates, negatives?

**2. Time & Space Complexity**
- State the actual time complexity with reasoning
- State the actual space complexity (including auxiliary)
- Verify the user's stated complexity if one was provided

**3. TypeScript & Code Quality**
- Are types correct and precise?
- Is the code idiomatic TypeScript?
- Any unnecessary complexity or redundant logic?
- Could the code be written with less repetition?

**4. Test Coverage**
- Check existing tests against the problem requirements
- Identify missing edge cases the tests don't cover
- For each gap found, write a short lesson explaining why that case matters

**5. Readability**
- Are variable names clear?
- Is the logic flow easy to follow?
- Are comments used well (explaining "why" not "what")?

## Feedback Format

- Write inline feedback prefixed with `💬` directly next to the related code
- Do NOT modify the solution logic
- Call out missed or weak test cases explicitly with a lesson learned
- End with a brief summary of strengths and top 2-3 improvement areas

## Context

This repo uses a structured format:
- `solution.ts` — the implementation
- `tests.ts` — test cases with `TestCase` type
- `notes.md` — problem summary, solutions, test cases, mistakes & lessons, other notes

Read all three files before starting the review.
