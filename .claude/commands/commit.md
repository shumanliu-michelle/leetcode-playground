# Commit Command

Commit changes with the most recently modified problem folder as the message.

## Usage
`/commit`

## Prompt

The user wants to commit their changes. Your job is to:

1. **Find** the most recently modified folder in `src/problems/` using `ls -t src/problems/ | head -1`
2. **Run** `git add .`
3. **Run** `git commit -m "<folder-name>"` using the folder name from step 1
4. **Report** the commit result to the user

If there are no changes to commit, report that nothing needs to be committed.

## Notes
- The commit message will be the folder name (e.g., "724-find-pivot-index")
- This follows the pattern established by the leetcode-playground workflow
