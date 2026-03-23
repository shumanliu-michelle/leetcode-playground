export function closeStrings(word1: string, word2: string): boolean {
    // operation 1 => both strings to share the same alphabet, same char same count
    // operation 2 => same alphabet but the frequency of each char can be rearranged e.g. [2,2,3] and [2,3,2]
    if (word1.length !== word2.length) return false;
  const map1 = new Map<string, number>();
    for (let i = 0; i < word1.length; i++) {
      map1.set(word1[i]!, (map1.get(word1[i]!) || 0) + 1)
    }
  const map2 = new Map<string, number>();
    for (let i = 0; i < word2.length; i++) {
      map2.set(word2[i]!, (map2.get(word2[i]!) || 0) + 1)
    }
    // same chars after sort
  const char1 = [...map1.keys()].sort();
  const char2 = [...map2.keys()].sort();
    for(let i = 0; i < char1.length; i++) {
      if (char1[i]!==char2[i]) return false;
    }
    // same count after sort
  const count1 = [...map1.values()].sort((a, b) => a - b);
  const count2 = [...map2.values()].sort((a, b) => a - b);
    for(let i = 0; i < count1.length; i++) {
      if (count1[i]!==count2[i]) return false;
    }
    return true;
};

export function closeStringsOptimized(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false; // lengths must match before any transforms

    // frequency arrays over lowercase ascii letters
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    for (const char of word1) {
        freq1[char.charCodeAt(0) - 97] += 1;
    }

    for (const char of word2) {
        freq2[char.charCodeAt(0) - 97] += 1;
    }

    // ensure both words expose the same alphabet
    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0) !== (freq2[i] === 0)) {
            return false;
        }
    }

    // compare the multisets of frequencies
    const sorted1 = [...freq1].sort((a, b) => a - b);
    const sorted2 = [...freq2].sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        if (sorted1[i] !== sorted2[i]) {
            return false;
        }
    }

    return true;
}
