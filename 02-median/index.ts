/* Note:
Seems like using a min-max heap or priority queues would optimize this,
but they are not in-build in TypeScript,
so this solution uses a binary search to insert new items
into a sorted array which makes this function O(n log n).
( ͡° ʖ̯ ͡°)
*/
export function calculateRunningMedian(arr: number[]) {
  let window: number[] = [],
    medians: number[] = [];

  for (const item of arr) {
    window.push(item);
    window.sort((a, b) => a - b);
    let windowSize = window.length;

    const left = window[Math.floor((windowSize - 1) / 2)];
    const right = window[Math.ceil((windowSize - 1) / 2)];
    medians.push((left + right) / 2);
  }
  return medians;
}
