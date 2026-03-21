export function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  let max = -Infinity;
  let i = 0;
  for (i = 0; i < k; i++) {
    sum += nums[i]!;
  }
  max  = Math.max (max, sum/k);
  while (i < nums.length) {
    sum = sum + nums[i]! - nums[i-k]!;
    max  = Math.max (max, sum/k);
    i++;
  }
  return max;
};

// time O(n)
// space O(1)