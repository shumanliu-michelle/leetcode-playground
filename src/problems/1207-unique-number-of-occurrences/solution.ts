export function uniqueOccurrences(arr: number[]): boolean {
    const count = new Map();
    for(const num of arr) {
      count.set(num, (count.get(num) || 0) + 1);
    }
    const counts = new Set([...count.values()]);
    return counts.size === count.size;
};

// T O(n)
// S O(n)