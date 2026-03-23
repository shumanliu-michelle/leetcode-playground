export function largestAltitude(gain: number[]): number {
    let prefixSum = 0;
    let max = 0;
    for(const num of gain) {
        prefixSum += num;
        if (prefixSum > max) max = prefixSum;
    }
    return max;
};
// T O(n)
// S O(1)
