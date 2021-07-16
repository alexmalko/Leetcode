var binarySearch = function (nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// recursive binary search
function binarySearchRec(array, target) {
  if (!array.length) return false;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);

  if (target < array[mid]) {
    return binarySearchRec(left, target);
  } else if (target > array[mid]) {
    return binarySearchRec(right, target);
  } else {
    return true;
  }
}

console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 70));
console.log(binarySearchRec([5, 10, 12, 15, 20, 30, 70], 80));
