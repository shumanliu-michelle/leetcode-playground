import { MinPriorityQueue } from "@datastructures-js/priority-queue";

export function findKthLargest(nums: number[], k: number): number {
    // to keep kth largest, we need to remove smaller elements, hence min heap
    const minHeap = new MinPriorityQueue<number>();
    for(const num of nums) {
      minHeap.enqueue(num);
      if (minHeap.size() > k) {
        minHeap.dequeue();
      }
    }
    return minHeap.front();
};

export function findKthLargest_countingSort(nums: number[], k: number): number {
    let min = Infinity;
    let max = -Infinity;
    for(const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }
    const count = new Array(max - min + 1). fill(0);
    for(const num of nums) {
        count[num - min]++;
    }
    for(let i = count.length - 1; i >= 0; i--) {
        k -= count[i];
        if (k <= 0) return i + min;
    }
    return -1;
};
