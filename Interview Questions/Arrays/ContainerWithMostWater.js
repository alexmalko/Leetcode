function container(height) {
  let max = 0,
    p1 = 0,
    p2 = height.length - 1;
  while (p1 < p2) {
    let min = Math.min(height[p1], height[p2]);
    max = Math.max(max, min * (p2 - p1));
    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return max;
}

console.log(container([1, 8, 6, 2, 5, 4, 8, 3, 7]));
