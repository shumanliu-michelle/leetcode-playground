export function longestSubarray(nums: number[]): number {
  let left = 0;
  let zeros = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right += 1) {
    if (nums[right] === 0) {
      zeros += 1;
    }
    while (zeros > 1) {
      if (nums[left] === 0) {
        zeros -= 1;
      }
      left += 1;
    }
    const windowLength = right - left + 1;
    maxLen = Math.max(maxLen, windowLength - 1);
  }

  return maxLen;
}
