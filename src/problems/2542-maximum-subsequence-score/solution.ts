import { MinPriorityQueue } from "@datastructures-js/priority-queue";

export function maxScore(nums1: number[], nums2: number[], k: number): number {
    // sum(...) * min(...) => fix min first and for each min maximize sum
    // for that fix min to be min, the rest need to be bigger, so sort first
    const pairs: number[][] = [];
    for(let i = 0; i < nums1.length; i++) {
      pairs.push([nums2[i]!, nums1[i]!]); // Space O(n)
    }
    pairs.sort((a,b) => b[0]! - a[0]!); // sort by nums2 desc, Time O(nlogn)

    // iterate through pairs, for each nums2 min, maintain minheap on nums1 array (evict min to keep bigger numbers) of size k - 1
    const minHeap = new MinPriorityQueue<number>(); // Space O(k)
    let ans = -Infinity;
    let sum = 0;
    for(const [min, num1] of pairs) { // Time (n * log k)
      // Evaluate only if we already have k-1 previous elements to pair with current
      if (minHeap.size() === k - 1) {
        ans = Math.max(ans, (sum + num1!) * min!);
      }
      minHeap.enqueue(num1!);
      sum += num1!;
      if (minHeap.size() > k - 1) {
        sum -= minHeap.dequeue()!;
      }
    }
    return ans;

};

// Time O(n log n + n log k) k<=n hence O(n log n)
// Space O(n + k) k<=n hence O(n)