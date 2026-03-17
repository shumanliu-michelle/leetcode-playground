export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  return candies.map((current) => current + extraCandies >= maxCandies);
}

// Time O(n)
// Space O(1) auxiliary, O(n) including output array
