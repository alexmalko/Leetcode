var sortedSquares = function (nums) {
  let result = [];
  let beg = 0;
  let end = nums.length - 1;
  let i = end;
  let num1;
  let num2;
  while (beg <= end) {
    num1 = nums[beg] * nums[beg];
    num2 = nums[end] * nums[end];
    if (num1 > num2) {
      result[i] = num1;
      beg++;
    } else {
      result[i] = num2;
      end--;
    }
    i--;
  }
  return result;
};

let array = [-4, -2, 0, 1, 2, 5];

console.log(sortedSquares(array));
