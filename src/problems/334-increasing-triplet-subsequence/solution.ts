export function increasingTriplet(nums: number[]): boolean {
  // Approach 1 (optimal): maintain best tails for length-1 and length-2 subsequences.
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
}

// Approach 2 (kept): prefix-min + suffix-max arrays.
export function increasingTriplet_2(nums: number[]): boolean {
  if (nums.length < 3) return false;

  const min = new Array<number>(nums.length);
  const max = new Array<number>(nums.length);

  min[0] = nums[0]!;
  for (let i = 1; i < nums.length; i += 1) {
    min[i] = Math.min(nums[i]!, min[i - 1]!);
  }

  max[nums.length - 1] = nums[nums.length - 1]!;
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    max[i] = Math.max(nums[i]!, max[i + 1]!);
    if (min[i]! < nums[i]! && nums[i]! < max[i]!) return true;
  }

  return false;
}

// Let n = nums.length
// increasingTriplet: Time O(n), Space O(1) auxiliary
// increasingTriplet_2: Time O(n), Space O(n)
