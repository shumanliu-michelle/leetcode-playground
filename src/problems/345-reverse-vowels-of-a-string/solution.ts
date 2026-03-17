export function reverseVowels(s: string): string {
  const chars = [...s];
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left]!.toLowerCase())) left += 1;
    while (left < right && !vowels.has(chars[right]!.toLowerCase())) right -= 1;

    [chars[left], chars[right]] = [chars[right]!, chars[left]!];
    left += 1;
    right -= 1;
  }

  return chars.join("");
}

// Let n = s.length
// Time: O(n)
// Space: O(n)
