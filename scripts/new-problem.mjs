#!/usr/bin/env node
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const folderArg = args.find((arg) => !arg.startsWith("--"));

if (!folderArg) {
  console.error("Usage: npm run new -- <folder-name> [--dry-run]");
  process.exit(1);
}

const repoRoot = process.cwd();
const problemDir = resolve(repoRoot, "src/problems", folderArg);
const relPrefix = relativeImportPrefix(problemDir);

const files = [
  {
    path: join(problemDir, "solution.ts"),
    content: solutionTemplate()
  },
  {
    path: join(problemDir, "tests.ts"),
    content: testsTemplate(relPrefix)
  },
  {
    path: join(problemDir, "notes.md"),
    content: notesTemplate(folderArg)
  }
];

for (const file of files) {
  if (existsSync(file.path)) {
    console.error(`Error: File already exists: ${file.path}`);
    process.exit(1);
  }
}

if (dryRun) {
  console.log(`[dry-run] Would create: ${problemDir}`);
  for (const file of files) console.log(`[dry-run] Would write: ${file.path}`);
  process.exit(0);
}

mkdirSync(problemDir, { recursive: true });
for (const file of files) {
  mkdirSync(dirname(file.path), { recursive: true });
  writeFileSync(file.path, file.content, "utf8");
}

console.log(`Created problem template at: ${problemDir}`);

function relativeImportPrefix(problemPath) {
  const relFromProblems = problemPath.replace(resolve(repoRoot, "src/problems"), "");
  const depth = relFromProblems.split("/").filter(Boolean).length;
  return "../".repeat(depth);
}

function solutionTemplate() {
  return `export function solution(input: unknown): unknown {
  // TODO: replace with original LeetCode function name/signature
  void input;
  // TODO: implement
  return null;
}
`;
}

function testsTemplate(relPrefix) {
  return `import { solution } from "./solution.js";

type Input = {
  // TODO: replace with your input shape
};

type Output = unknown; // TODO: replace with your expected output type

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: {
      // TODO
    },
    expected: undefined as unknown as Output
  }
];

runTests({
  fn: ({}) => solution(),
  testCases
});
`;
}

function notesTemplate(folderName) {
  return `# ${folderName}

- Link:
- Difficulty:
- Pattern:

## Question Summary

## Solutions

### 1) Approach
- Idea:
- Time:
- Space:

## Test Cases

## Mistakes And Lessons

## Other Useful Notes
`;
}
