export function gcdOfStrings_1(str1: string, str2: string): string {
  // get shorter string first  
  let divisor = str1.length < str2.length ? str1 : str2;
  // use shorter string as the gcd
  // starting with full length
  while (divisor.length > 0) {
    if (str1.length % divisor.length === 0 && str2.length % divisor.length === 0) { // only worth exploring if this string is dividable by both string;
      if (isBuiltBy(str1, divisor) && isBuiltBy(str2, divisor)) return divisor;
    }
    divisor = divisor.slice(0, divisor.length - 1);
  }

  return "";
}

function isBuiltBy(s: string, divisor: string): boolean {
  for (let i = 0; i < s.length; i += divisor.length) {
    if (s.slice(i, i + divisor.length) !== divisor) return false;
  }
  return true;
}
//  If m = len(str1), n = len(str2), and s = min(m, n):
// Time: O(s * (m + n))
// Space: O(s) (counting temporary substring/slice allocations)

export function gcdOfStrings_2(str1: string, str2: string): string {
  // If strings are not formed by the same base pattern, no common divisor exists.
  if (str1 + str2 !== str2 + str1) return "";

  const commonLength = gcd(str1.length, str2.length);
  return str1.slice(0, commonLength);
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

// Let n = str1.length, m = str2.length
// Time: O(n + m)
// Space: O(n + m) due to temporary concatenated strings in the equality check
