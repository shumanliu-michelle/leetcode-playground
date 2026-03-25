import { MinPriorityQueue } from "@datastructures-js/priority-queue";

export class SmallestInfiniteSet {
  public popped: Set<number>;
  public nextPop: number;
  constructor() {
    this.popped =  new Set();
    this.nextPop = 1;
  }

  // Time O(n) n is the number of popped element
  popSmallest(): number {
    // always pop curr element
    let smallest = this.nextPop;
    this.popped.add(smallest); // add to set
    // loop to find the next pop element (next element that not in set)
    while(this.popped.has(this.nextPop)) {
      this.nextPop++;
    }
    return smallest;
  }

  // Time O(1)
  addBack(num: number): void {
    // if not in set, do nothing
    if (!this.popped.has(num)) return;
    // if in set, remove
    this.popped.delete(num);
    // if num < curr, next pop should be this num
    if (num < this.nextPop) this.nextPop = num;
    // if num >= curr, not yet removed, do nothing
  }
}

export class SmallestInfiniteSet_Heap {
  public addedBack: MinPriorityQueue<number>; // keep track of nums that are added back, nums in the heap will always smaller than currPointer
  public addedBackSet: Set<number>; // for O(1) lookup during addBack
  public currPointer: number; // increase from 1
  constructor() {
    this.addedBack =  new MinPriorityQueue<number>();
    this.addedBackSet = new Set();
    this.currPointer = 1;
  }

  popSmallest(): number {
    if (!this.addedBack.isEmpty()) {
      // there are smaller num to pop
      const pop = this.addedBack.dequeue()!;
      this.addedBackSet.delete(pop);
      return pop;
    } else {
      // pop from currPointer then increase by 1
      return this.currPointer++;
    }
  }

  addBack(num: number): void {
    if (num >= this.currPointer) return; // new num not yet popped
    if (this.addedBackSet.has(num)) return; // already added back;
    this.addedBackSet.add(num);
    this.addedBack.enqueue(num);
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */