/* Note:
Seems like using a min-max heap or priority queues would optimize this,
but they are not in-build in TypeScript,
so this solution uses a binary search to insert new items
into a sorted array which makes this function O(n log n).
( ͡° ʖ̯ ͡°)
*/
export function calculateRunningMedian(arr: number[]) {
  let windowStart = 0,
    window: number[] = [],
    medians: number[] = [];
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element to the window
    binaryInsert(window, arr[windowEnd]);
    let windowSize = windowEnd - windowStart + 1;

    // calculate the average of the two middle numbers
    // for a number of even elements in the window
    if (windowSize % 2 == 0) {
      const left = window[windowSize / 2 - 1];
      const right = window[windowSize / 2];
      medians.push((left + right) / 2);
    } else {
      // take the middle number
      const mid = window[Math.floor(windowSize / 2)];
      medians.push(mid);
    }
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
