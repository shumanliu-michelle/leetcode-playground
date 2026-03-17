export function mergeAlternately(word1: string, word2: string): string {
  let i = 0;
  const out: string[] = [];

  while (i < word1.length || i < word2.length) {
    if (i < word1.length) out.push(word1[i]!);
    if (i < word2.length) out.push(word2[i]!);
    i += 1;
  }

  return out.join("");
}
