export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;

  for (let i = 0; i < flowerbed.length; i += 1) {
    const leftIsEmpty = i === 0 || flowerbed[i - 1] === 0;
    const rightIsEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (flowerbed[i] === 0 && leftIsEmpty && rightIsEmpty) {
      flowerbed[i] = 1;
      n -= 1;
      if (n === 0) return true;
    }
  }

  return false;
}

export function canPlaceFlowers_optimization(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;

  for (let i = 0; i < flowerbed.length && n > 0; i += 1) {
    if (flowerbed[i] === 1) {
      i += 1;
      continue;
    }

    const leftIsEmpty = i === 0 || flowerbed[i - 1] === 0;
    const rightIsEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (leftIsEmpty && rightIsEmpty) {
      flowerbed[i] = 1;
      n -= 1;
      i += 1;
    }
  }

  return n === 0;
}

// Alternative explored approach: greedy placement + reverse validation.
export function canPlaceFlowers_greedy(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;

  for (let i = 0; i < flowerbed.length && n > 0; i += 1) {
    if (flowerbed[i] === 1) {
      i += 1;
      continue;
    }

    const rightIsEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
    if (rightIsEmpty) {
      flowerbed[i] = 1;
      n -= 1;
      i += 1;
    }
  }

  if (n > 0) return false;

  for (let i = flowerbed.length - 1; i >= 0; i -= 1) {
    if (flowerbed[i] === 1) {
      const leftIsEmpty = i === 0 || flowerbed[i - 1] === 0;
      if (!leftIsEmpty) return false;
    }
  }

  return true;
}

// Let L = flowerbed.length
// Time: O(L)
// Space: O(1) auxiliary
