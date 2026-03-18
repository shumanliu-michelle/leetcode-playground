export function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  let product = 1;
  for (let i = 0; i < nums.length; i += 1) {
    // Prefix product up to i-1.
    product *= nums[i - 1] ?? 1;
    result[i] = product;
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    // Suffix product from i+1 onward.
    product *= nums[i + 1] ?? 1;
    result[i]! *= product;
  }

  return result;
}

// Let n = nums.length
// Time: O(n)
// Space: O(1) auxiliary (excluding output array)
