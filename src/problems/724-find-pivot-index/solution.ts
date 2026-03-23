export function pivotIndex(nums: number[]): number {
  let total = 0;  
  for (const num of nums) {
    total += num;
  }
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - leftSum - nums[i]!;
    if (rightSum === leftSum) return i;
    leftSum += nums[i]!;
  }
  return -1;
};