var twoSum = function (numbers, target) {
  let beg = 0;
  let end = numbers.length - 1;
  while (beg < end) {
    let sum = numbers[beg] + numbers[end];
    if (sum > target) {
      end--;
    } else if (sum < target) {
      beg++;
    } else {
      return [beg + 1, end + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
