# LeetCode Coach Playground

A local TypeScript repo for structured LeetCode practice with Codex as a coaching assistant.

This project is designed to help you practice by **pattern**, capture what you learned from each problem, and build a repeatable workflow for both **practice mode** and **interview mode**.

## Goals

- Practice LeetCode problems in a clean local repo
- Use Codex as a coach instead of a solution generator
- Focus on pattern recognition, debugging, and code review
- Keep durable notes on mistakes, lessons, and test cases
- Build stronger interview habits over time

## How This Repo Is Intended to Work

This repo follows two coaching modes.

### Practice Mode

Use this for normal daily problem solving.

- No interviewer roleplay
- No follow-up interview questions
- Direct coaching focused on learning efficiently
- Emphasis on pattern recognition, implementation, debugging, and retrospectives

### Interview Mode

Use this for selected classic medium and hard problems.

- Codex behaves like a coding interviewer
- You drive the solution
- Clarifying questions come first
- Hints only when needed
- Final review includes complexity, edge cases, and code quality

## Repo Structure

```text
src/
  problems/              # problem solutions organized by number
  templates/             # reusable templates for notes, solution files, or test scaffolds
  types/                 # shared TypeScript types
  utils/                 # test runners and helper utilities
AGENTS.md                # repo-specific Codex coaching instructions
package.json             # scripts and dependencies
README.md
```

## How to Choose a Mode

You can specify the coaching mode directly in your prompt to Codex.

### Practice Mode

Use practice mode for normal pattern training.

Recommended prompt:

```text
Use practice mode.
Do not roleplay as an interviewer.
Do not give me the full solution unless I ask.
Help me identify the pattern, review my approach, and point out edge cases.
```

Expected behavior:

- direct coaching
- pattern-first guidance
- debugging help
- code review
- no follow-up interview questions

### Interview Mode

Use interview mode only for selected classic medium and hard problems.

Recommended prompt:

```text
Use interview mode.
Act like a coding interviewer.
Ask clarifying questions first.
Do not give me the answer unless I ask.
Only give hints if I get stuck.
```

Expected behavior:

- interviewer-style interaction
- you drive the solution
- clarifying questions first
- hints only when needed
- final complexity and code review

## Problem File Workflow

A lightweight structure for each problem:

```text
src/
  problems/
    merge-strings-alternately/
      solution.ts
      tests.ts
      notes.md
```

### What each file is for

- `solution.ts` — your implementation
- `tests.ts` — test cases for the problem
- `notes.md` — your summary, mistakes, lessons, and retrospective

### Example `solution.ts`

```ts
export function mergeAlternately(word1: string, word2: string): string {
  return "";
}
```

### Example `tests.ts`

```ts
import { mergeAlternately } from "./solution";
import type { TestCase } from "../../types";

const cases: TestCase<[string, string], string>[] = [
  {
    name: "same length",
    input: ["abc", "pqr"],
    expected: "apbqcr",
  },
  {
    name: "word2 longer",
    input: ["ab", "pqrs"],
    expected: "apbqrs",
  },
];

for (const testCase of cases) {
  const actual = mergeAlternately(...testCase.input);
  const pass = actual === testCase.expected;

  console.log(
    pass
      ? `✅ ${testCase.name ?? "unnamed test"}`
      : `❌ ${testCase.name ?? "unnamed test"} | expected: ${testCase.expected}, actual: ${actual}`,
  );
}
```

## How to Create a New Problem File

Example for a two-pointers problem:

```bash
mkdir -p src/problems/merge-strings-alternately
cd src/problems/merge-strings-alternately
touch solution.ts tests.ts notes.md
```

Then fill in:

- the function signature in `solution.ts`
- your test cases in `tests.ts`
- your notes in `notes.md`

## How to Run Files

If you are using `tsx`, a simple way to run a single file is:

```bash
node --import tsx src/problems/merge-strings-alternately/tests.ts
```

You can also add scripts in `package.json`.

Example:

```json
{
  "scripts": {
    "test:one": "node --import tsx"
  }
}
```

Then run:

```bash
npm run test:one -- src/problems/merge-strings-alternately/tests.ts
```

## How to Add Repo Instructions for Codex

Put persistent repo instructions in `AGENTS.md` at the repo root.

Codex reads `AGENTS.md` automatically when started inside this repository.

Recommended use for `AGENTS.md`:

- define practice mode as the default
- reserve interview mode for selected problems
- tell Codex not to give full solutions unless asked
- require pattern identification, debugging help, and code review
- require thought-process feedback after solving

Example `AGENTS.md` guidance:

```md
# Codex Coaching Instructions

Default to practice mode.

In practice mode:
- do not roleplay as an interviewer
- do not generate follow-up interview questions
- do not give the full solution unless asked
- focus on pattern recognition, debugging, code review, and retrospectives

In interview mode:
- ask clarifying questions first
- let the user drive
- give hints only when needed
- review time and space complexity at the end
```

## Recommended Notes Template

For each `notes.md`, keep sections like:

```md
# [Problem Title]

- Link:
- Difficulty:
- Pattern:
- Date:

## Question Summary

## Brute Force Idea

## Optimized Idea

## Test Cases

## Mistakes and Lessons

## Retrospective
- What slowed me down?
- What should I notice faster next time?
```

## Suggested Daily Workflow

1. Create a problem folder
2. Add `solution.ts`, `tests.ts`, and `notes.md`
3. Solve the problem yourself first
4. Ask Codex for coaching in the correct mode
5. Run tests locally
6. Record mistakes, lessons, and pattern notes
7. Revisit weak problems later