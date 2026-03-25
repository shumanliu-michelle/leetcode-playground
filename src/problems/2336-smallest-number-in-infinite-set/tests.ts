import { SmallestInfiniteSet, SmallestInfiniteSet_Heap } from "./solution.js";


type Operation =
  | { op: "pop" }
  | { op: "add"; num: number };

function runTestSequence(
  name: string,
  obj: { popSmallest: () => number; addBack: (num: number) => void },
  operations: Operation[],
  expected: (number | null)[]
): void {
  const results: (number | null)[] = [];
  for (const { op, num } of operations) {
    if (op === "pop") {
      results.push(obj.popSmallest());
    } else {
      obj.addBack(num);
      results.push(null);
    }
  }
  const pass = JSON.stringify(results) === JSON.stringify(expected);
  console.log(`${pass ? "✅" : "❌"} ${name}`);
  if (!pass) {
    console.log(`  Expected: ${JSON.stringify(expected)}`);
    console.log(`  Got:      ${JSON.stringify(results)}`);
  }
};

// Test Set + Pointer implementation
const set1 = new SmallestInfiniteSet();
runTestSequence(
  "Set+Pointer: example sequence",
  set1,
  [
    { op: "add", num: 2 },
    { op: "pop" },
    { op: "pop" },
    { op: "pop" },
    { op: "add", num: 1 },
    { op: "pop" },
    { op: "pop" },
    { op: "pop" },
  ],
  [null, 1, 2, 3, null, 1, 4, 5]
);

const set2 = new SmallestInfiniteSet();
runTestSequence(
  "Set+Pointer: addBack(1000) never popped",
  set2,
  [{ op: "add", num: 1000 }, { op: "pop" }, { op: "pop" }],
  [null, 1, 2]
);

const set3 = new SmallestInfiniteSet();
runTestSequence(
  "Set+Pointer: multiple addBack same number",
  set3,
  [
    { op: "pop" },
    { op: "pop" },
    { op: "add", num: 1 },
    { op: "add", num: 1 },
    { op: "pop" },
  ],
  [1, 2, null, null, 1]
);

// Test Heap implementation
const heap1 = new SmallestInfiniteSet_Heap();
runTestSequence(
  "Heap: example sequence",
  heap1,
  [
    { op: "add", num: 2 },
    { op: "pop" },
    { op: "pop" },
    { op: "pop" },
    { op: "add", num: 1 },
    { op: "pop" },
    { op: "pop" },
    { op: "pop" },
  ],
  [null, 1, 2, 3, null, 1, 4, 5]
);

const heap2 = new SmallestInfiniteSet_Heap();
runTestSequence(
  "Heap: addBack(1000) never popped",
  heap2,
  [{ op: "add", num: 1000 }, { op: "pop" }, { op: "pop" }],
  [null, 1, 2]
);

const heap3 = new SmallestInfiniteSet_Heap();
runTestSequence(
  "Heap: multiple addBack same number",
  heap3,
  [
    { op: "pop" },
    { op: "pop" },
    { op: "add", num: 1 },
    { op: "add", num: 1 },
    { op: "pop" },
  ],
  [1, 2, null, null, 1]
);
