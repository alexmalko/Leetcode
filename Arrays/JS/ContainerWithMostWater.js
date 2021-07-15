var maxArea = function (height) {
  let max = 0;
  let a = 0;
  let b = height.length - 1;
  while (a < b) {
    if (height[a] < height[b]) {
      max = Math.max(max, height[a] * (b - a));
      a++;
      console.log(max);
    } else {
      max = Math.max(max, height[b] * (b - a));
      b--;
    }
  }
  return max;
};

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

maxArea(arr);
