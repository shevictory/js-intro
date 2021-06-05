const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = null;
  do {
    middle = Math.ceil((start + end) / 2);
    if (value === arr[middle]) {
      return middle;
    }
    if (value < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  } while (start <= end);
  return -1;
}
