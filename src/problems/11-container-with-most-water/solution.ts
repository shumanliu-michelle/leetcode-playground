export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let best = 0;

  while (left < right) {
    const width = right - left;
    const area = width * Math.min(height[left]!, height[right]!);
    best = Math.max(best, area);

    // Width always shrinks, so only moving shorter side can improve bottleneck height.
    if (height[left]! < height[right]!) left += 1;
    else right -= 1;
  }

  return best;
}

// Let n = height.length
// Time: O(n)
// Space: O(1)
