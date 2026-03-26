# 872. Leaf Similar Trees

- Link: https://leetcode.com/problems/leaf-similar-trees
- Difficulty: easy
- Pattern: DFS / Tree Traversal
- Date: 2026-03-26

## Question Summary

Check if two trees have the same leaf sequence (left-to-right order of leaf values).

## Solutions

### 1) DFS - Collect Leaves Then Compare (-- implemented)
- **Idea**: DFS each tree, collect leaf nodes into array, then compare arrays element-by-element.
- **Time**: O(n + m) where n, m are tree sizes
- **Space**: O(h) recursion + O(L) for leaves where L = number of leaves

### 2) Stack-Based Compare On-The-Fly (-- optimal)
- **Idea**: Use two stacks to traverse both trees simultaneously. Each pop gives the next leaf from that tree. Compare immediately without storing.
- **Time**: O(n + m)
- **Space**: O(h) - stacks only store path to current leaf, not all leaves
- **Why better**: Only stores path nodes, not all leaves. Compares as we go instead of collecting first.

```typescript
// Key insight: stack stores nodes to revisit. When we pop,
// we push children (right first, left second) so left is processed first.
while (stack.length) {
  const node = stack.pop()!;
  if (!node.left && !node.right) return node.val; // leaf
  if (node.right) stack.push(node.right);
  if (node.left) stack.push(node.left);
}
```

## Test Cases

- ✅ `Tree1: [3,5,1,6,2,9,8], Tree2: [3,5,1,6,7,4,2,...,9,8]` → true
- ✅ `Tree1: [1,2,3], Tree2: [1,3,2]` → false
- ✅ Both empty → true
- ✅ One empty one not → false
- ✅ Single node both same → true

## Mistakes And Lessons

- **Repeated array copying during recursion**
  - Lesson: Don't do `[...getLeaves(left), ...getLeaves(right)]` - creates new arrays at each level, O(n²)
  - Context: Instead, pass array by reference and mutate in-place: `collectLeaves(root, leaves)` where leaves is pushed to
- **Inefficient space usage**
  - Lesson: The stack approach only stores path nodes, not all leaves - more space efficient
  - Context: Compare on-the-fly avoids storing full leaf sequences

## Other Useful Notes

- **Leaf definition**: node with `!left && !right`
- **Traversal order**: Left subtree before right subtree (push right first, then left so left pops first)
- **Stack vs Recursion**: Both work, but stack avoids call stack overflow for deep trees
