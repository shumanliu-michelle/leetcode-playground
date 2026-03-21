export function findMaxAverage(nums: number[], k: number): number {
  let windowSum = 0;

  for (let i = 0; i < k; i += 1) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < nums.length; i += 1) {
    windowSum += nums[i] - nums[i - k];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum / k;
}
