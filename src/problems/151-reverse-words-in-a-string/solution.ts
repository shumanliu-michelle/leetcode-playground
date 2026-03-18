export function reverseWords(s: string): string {
  const result: string[] = [];
  let word = "";

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === " " && word === "") continue;
    if (s[i] !== " ") word += s[i];

    if (s[i] === " " || i === s.length - 1) {
      if (word.length > 0) result.unshift(word);
      word = "";
    }
  }

  return result.join(" ");
}

// Follow-up style: simulate in-place strategy on a mutable char buffer.
export function reverseWords_followup(s: string): string {
  if (s.length === 0) return s;

  // Step 1: build a normalized char array (trim + collapse spaces)
  const str: string[] = [];
  let left = 0;
  let right = s.length - 1;

  while (left <= right && s[left] === " ") left += 1;
  while (left <= right && s[right] === " ") right -= 1;

  while (left <= right) {
    if (s[left] !== " ") {
      str.push(s[left]!);
    } else if (str[str.length - 1] !== " ") {
      str.push(" ");
    }
    left += 1;
  }

  // Step 2: reverse whole array
  reverseRange(str, 0, str.length - 1);

  // Step 3: reverse each word
  let next = 0;
  while (next < str.length) {
    while (next < str.length && str[next] === " ") next += 1;
    let wordLeft = next;
    while (next < str.length && str[next] !== " ") next += 1;
    let wordRight = next - 1;
    reverseRange(str, wordLeft, wordRight);
  }

  return str.join("");
}

function reverseRange(arr: string[], left: number, right: number): void {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right]!, arr[left]!];
    left += 1;
    right -= 1;
  }
}
