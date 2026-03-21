export function maxVowels(s: string, k: number): number {
    let max = -Infinity;
    const vowel = new Set(['a', 'e', 'i', 'o', 'u']);
    // build first window
    let i = 0;
    let count = 0;
    for (; i < k; i++) {
      if (vowel.has(s[i]!)) count++;
      if (count > max) max = count;
    }
    // slide window size of k, to count vowel
    // push s[i] and evict s[i - k]
    for (; i < s.length; i++) {
      if (vowel.has(s[i]!)) count++;
      if (vowel.has(s[i-k]!)) count--;
      if (count > max) max = count;
    }
    return max;
};
// O(n)
// O(1)