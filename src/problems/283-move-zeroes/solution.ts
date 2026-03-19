export function moveZeroes(nums: number[]): void {
  let left = 0;

  for (let right = 0; right < nums.length; right += 1) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right]!, nums[left]!];
      left += 1;
    }
  }
}

// Let n = nums.length
// Time: O(n)
// Space: O(1)
