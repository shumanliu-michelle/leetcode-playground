export function compress(chars: string[]): number {
  let left = 0;
  let right = 0;

  while (right < chars.length) {
    const currChar = chars[right]!;
    let count = 0;

    // Outer loop processes runs; inner loop consumes one run fully.
    while (right < chars.length && chars[right] === currChar) {
      count += 1;
      right += 1;
    }

    chars[left] = currChar;
    left += 1;

    if (count > 1) {
      const countStr = count.toString();
      for (let i = 0; i < countStr.length; i += 1) {
        chars[left] = countStr[i]!;
        left += 1;
      }
    }
  }

  return left;
}
