/**
 * Calculate the running max of each subarray of length k in a list of numbers.
 * @param list - The list of numbers.
 * @param k - The length of the subarray.
 * @returns An array containing the running max values.
 */
export function calculateRunningMax(list: number[], k: number): number[] {
  if (k <= 0) throw new Error("k must be greater than zero");
  if (list.length === 0) return [];

  const maxValues: number[] = [];
  const window: number[] = [];

  for (let i = 0; i < list.length; i++) {
    // Remove elements that are out of the current window
    while (window.length > 0 && window[0] <= i - k) {
      window.shift();
    }

    // Remove elements that are smaller than the current element
    while (window.length > 0 && list[window[window.length - 1]] <= list[i]) {
      window.pop();
    }

    // Add the current index to the window
    window.push(i);

    // If the window is of size k, record the maximum value
    if (i >= k - 1) {
      maxValues.push(list[window[0]]);
    }
  }

  return maxValues;
}
