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
    binaryInsert(window, item);
    let windowSize = window.length;

    const left = window[Math.floor((windowSize - 1) / 2)];
    const right = window[Math.ceil((windowSize - 1) / 2)];
    medians.push((left + right) / 2);
  }
  return medians;
}

function binaryInsert(arr: number[], value: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === value) {
      arr.splice(mid, 0, value);
      return;
    }

    if (arr[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // 'start' now points to where the new element should be inserted.
  arr.splice(start, 0, value);
}
