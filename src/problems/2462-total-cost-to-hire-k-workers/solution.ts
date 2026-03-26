import { MinPriorityQueue } from "@datastructures-js/priority-queue";

export function totalCost(costs: number[], k: number, candidates: number): number {
  // Two min-heaps: one for left candidates, one for right candidates
  const leftHeap = new MinPriorityQueue<number>();
  const rightHeap = new MinPriorityQueue<number>();
  let left = 0;
  let right = costs.length - 1;

  // Populate both heaps with initial candidates (up to 'candidates' each)
  while (left <= right && leftHeap.size() < candidates) {
    leftHeap.enqueue(costs[left]!);
    left++;
  }
  while (left <= right && rightHeap.size() < candidates) {
    rightHeap.enqueue(costs[right]!);
    right--;
  }

  let cost = 0;
  while (k > 0) {
    // Use Infinity when heap is empty to prefer the other heap
    const leftCandidate = leftHeap.isEmpty() ? Infinity : leftHeap.front()!;
    const rightCandidate = rightHeap.isEmpty() ? Infinity : rightHeap.front()!;

    // Choose from the heap with lower cost (tie-break: left wins due to <=)
    if (leftCandidate <= rightCandidate) {
      cost += leftHeap.dequeue()!;
      if (left <= right) {
        leftHeap.enqueue(costs[left]!);
        left++;
      }
    } else {
      cost += rightHeap.dequeue()!;
      if (left <= right) {
        rightHeap.enqueue(costs[right]!);
        right--;
      }
    }
    k--;
  }
  return cost;
}