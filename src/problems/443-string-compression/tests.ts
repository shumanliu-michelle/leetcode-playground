import { compress } from "./solution.js";

type Input = {
  chars: string[];
};

type Output = {
  length: number;
  chars: string[];
};

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1",
    input: {
      chars: ["a", "a", "b", "b", "c", "c", "c"]
    },
    expected: {
      length: 6,
      chars: ["a", "2", "b", "2", "c", "3"]
    }
  },
  {
    name: "single char",
    input: {
      chars: ["a"]
    },
    expected: {
      length: 1,
      chars: ["a"]
    }
  },
  {
    name: "count >= 10",
    input: {
      chars: ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
    },
    expected: {
      length: 4,
      chars: ["a", "b", "1", "2"]
    }
  },
  {
    name: "mixed groups",
    input: {
      chars: ["a", "a", "a", "b", "b", "a", "a"]
    },
    expected: {
      length: 6,
      chars: ["a", "3", "b", "2", "a", "2"]
    }
  }
];

runTests({
  fn: ({ chars }) => {
    const arr = [...chars];
    const length = compress(arr);
    return { length, chars: arr.slice(0, length) };
  },
  testCases,
  label: "compress"
});
