function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// another implementation
// https://open.appacademy.io/learn/full-stack-online/data-structures-and-algorithms/quick-sort-notes
function quickSort2(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter((el) => el < pivot);
  let right = array.filter((el) => el >= pivot);

  let leftSorted = quickSort2(left);
  let rightSorted = quickSort2(right);

  console.log("left sorted", leftSorted);
  console.log("right sorted", rightSorted);

  return [...leftSorted, pivot, ...rightSorted];
}

console.log(quickSort2([100, -3, 6, 9, 3, 23]));
