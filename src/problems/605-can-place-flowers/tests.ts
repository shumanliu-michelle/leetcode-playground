import { canPlaceFlowers, canPlaceFlowers_optimization, canPlaceFlowers_greedy } from "./solution.js";

type Input = {
  flowerbed: number[];
  n: number;
};

type Output = boolean;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example: can place one",
    input: { flowerbed: [1, 0, 0, 0, 1], n: 1 },
    expected: true
  },
  {
    name: "example: cannot place two",
    input: { flowerbed: [1, 0, 0, 0, 1], n: 2 },
    expected: false
  },
  {
    name: "edge: n is zero",
    input: { flowerbed: [1, 0, 1], n: 0 },
    expected: true
  },
  {
    name: "edge: near boundary impossible",
    input: { flowerbed: [1, 0, 0, 0, 0, 1], n: 2 },
    expected: false
  },
  {
    name: "edge: near boundary possible once",
    input: { flowerbed: [1, 0, 0, 0, 0, 1], n: 1 },
    expected: true
  },
  {
    name: "edge: both ends available",
    input: { flowerbed: [0, 0, 1, 0, 0], n: 2 },
    expected: true
  },
  {
    name: "edge: all empty",
    input: { flowerbed: [0, 0, 0, 0], n: 2 },
    expected: true
  },
  {
    name: "edge: single slot empty",
    input: { flowerbed: [0], n: 1 },
    expected: true
  },
  {
    name: "edge: single slot planted",
    input: { flowerbed: [1], n: 1 },
    expected: false
  }
];

runTests({
  fn: ({ flowerbed, n }) => canPlaceFlowers([...flowerbed], n),
  testCases,
  label: "canPlaceFlowers"
});

runTests({
  fn: ({ flowerbed, n }) => canPlaceFlowers_optimization([...flowerbed], n),
  testCases,
  label: "canPlaceFlowers_optimization"
});

runTests({
  fn: ({ flowerbed, n }) => canPlaceFlowers_greedy([...flowerbed], n),
  testCases,
  label: "canPlaceFlowers_greedy"
});
