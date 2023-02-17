function binarySearch(arr, targetValue) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(left + right) / 2;

  // left와 right값이 동일하거나 mid값이 targetValue와 동일하면 루프를 종료한다.
  while (left < right) {
    const rightValue = arr[right];
    const leftValue = arr[left];
    const midValue = arr[mid];

    if (midValue === targetValue) {
      return mid;
    }

    if (midValue > targetValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor(left + right) / 2;
  }

  return -1;
}
