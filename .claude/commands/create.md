# New Problem Command

Scaffold a new LeetCode problem directory using the offline fallback script.

## Usage
`/create <title>`

Examples:
```
/create 215. Kth Largest Element in an Array
/create 215
```

## Prompt

The user wants to scaffold a new LeetCode problem. Your job is to:

1. **Accept** a problem title (e.g. "215. Kth Largest Element in an Array") or just a number (e.g. "215")
2. **Convert** the title to a slug:
   - If only a number is given (e.g. "215"), use it as-is
   - If a full title is given (e.g. "215. Kth Largest Element in an Array"), extract the number and convert the title to kebab-case
   - Example: "215. Kth Largest Element in an Array" → "215-kth-largest-element-in-an-array"
3. **Run** `npm run new -- <slug>` to create the template files
4. **Report** the created path to the user

### Title to Slug Conversion
- Remove the leading number and period
- Convert to lowercase
- Replace spaces with hyphens
- Remove any non-alphanumeric characters (except hyphens)

### Notes
- The npm script creates basic template files without fetching from LeetCode
- User should fill in the problem details manually in `notes.md`
- Slug format: `<number>-<kebab-case-title>` (e.g. `215-kth-largest-element-in-an-array`)
