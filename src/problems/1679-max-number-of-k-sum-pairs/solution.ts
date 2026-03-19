export function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let operations = 0;

  while (left < right) {
    const sum = nums[left]! + nums[right]!;
    if (sum < k) {
      left += 1;
    } else if (sum > k) {
      right -= 1;
    } else {
      operations += 1;
      left += 1;
      right -= 1;
    }
  }

  return operations;
}
// Time: O(n log n), Space: O(1) auxiliary

export function maxOperations_hashmap(nums: number[], k: number): number {
  const unmatched = new Map<number, number>();
  let operations = 0;

  for (const num of nums) {
    const needed = k - num;
    const available = unmatched.get(needed) ?? 0;

    if (available > 0) {
      operations += 1;
      if (available === 1) unmatched.delete(needed);
      else unmatched.set(needed, available - 1);
    } else {
      unmatched.set(num, (unmatched.get(num) ?? 0) + 1);
    }
  }

  return operations;
}
// Time: O(n), Space: O(n)
