# Tidy Command

Tidy up the user's working solution into the final structured study note format.

## Usage
`/tidy`

## Prompt

The user has finished revising their solution and wants it tidied into the study note format. Convert the current working files into the standard structured format.

## When to Use

Only run this when the user explicitly says they are done revising and asks to tidy up. During active solving, the user may keep work in a single simple `.ts` file.

## Tidy-Up Process

**1. Read the existing files**
- Read the current `solution.ts`, `tests.ts`, and `notes.md` (if they exist)
- Read the problem from the LeetCode link in `notes.md` if available

**2. Reconstruct into structured format**

Create/update `notes.md` with this exact structure:

```markdown
# {Number}. {Title}

- Link: https://leetcode.com/problems/{slug}
- Difficulty: easy | medium | hard
- Pattern: {pattern name}
- Date: {YYYY-MM-DD}

## Question Summary

{concise interview-style question restatement}

## Solutions

### 1) {Approach Name} {(-- implemented) | (-- optimal) | etc.}
- Idea: {one-sentence summary}
- Time: O({complexity})
- Space: O({complexity})

{additional approaches if relevant}

## Test Cases

- ✅ {representative case description}
- ✅ {edge case description}
- ❌ {missed case from before} — {what was missed}

## Mistakes And Lessons

- {mistake description}
  - Lesson: {what was learned}
  - Context: {brief code snippet if relevant}

## Other Useful Notes

- {reusable insight, pattern reminder, gotcha to remember}
```

**3. Update `solution.ts`**

- Keep the original LeetCode function signature (original name and arguments)
- Do NOT replace with a generalized `solve(input)` wrapper
- If the user's original solution is not optimal, KEEP it and add the optimal solution alongside in `notes.md`

**4. Update `tests.ts`**

- Ensure test cases cover:
  - Representative/example cases
  - Important edge cases (clearly marked)
  - Any cases that were missed before (marked with ❌ and lesson learned)

**5. Key Rules**

- Keep original function names and signatures from LeetCode
- If user's approach differs from optimal, document both — don't erase the user's work
- Mark the implemented approach clearly and label optimal if different
- For each missed test case, add a short lesson learned

## Context

This repo is at: `/Users/shumanliu/Projects/leetcode-playground`
Problem files are in: `src/problems/{problem-slug}/`
