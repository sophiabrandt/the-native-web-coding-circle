export function calculateRunningMax(list: number[], k: number): number[] {
  if (k <= 0) {
    throw new Error("k must be greater than zero");
  }

  if (list.length === 0) {
    return [];
  }

  let windowStart = 0;
  let windowEnd = k - 1;
  let maxValues = [];

  while (windowEnd < list.length) {
    let windowValues = list.slice(windowStart, windowEnd + 1);
    let max = Math.max(...windowValues);
    maxValues.push(max);
    windowStart++;
    windowEnd++;
  }

  return maxValues;
}
