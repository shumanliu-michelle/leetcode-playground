export function isSubsequence(s: string, t: string): boolean {
    let j = 0;
    for (let i = 0; i < t.length; i++) {
      if (t[i] === s[j]) {
        j++;
      }
    }
    return j === s.length;
};

export function createSubsequenceChecker(t: string): (s: string) => boolean {
  const indexMap = new Map<string, number[]>();

  for (let i = 0; i < t.length; i += 1) {
    const ch = t[i]!;
    const indices = indexMap.get(ch);
    if (indices) indices.push(i);
    else indexMap.set(ch, [i]);
  }

  return (s: string): boolean => {
    let prev = -1;

    for (let i = 0; i < s.length; i += 1) {
      const positions = indexMap.get(s[i]!);
      if (!positions) return false;

      const nextPointer = firstGreaterThan(positions, prev);
      if (nextPointer === positions.length) return false;

      prev = positions[nextPointer]!;
    }

    return true;
  };
}

export function isSubsequence_followup(s: string, t: string): boolean {
  return createSubsequenceChecker(t)(s);
}

function firstGreaterThan(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid]! <= target) left = mid + 1;
    else right = mid;
  }

  return left;
}
