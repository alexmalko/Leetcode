function square(num) {
  let left = 1,
    right = num;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    }
  }
  return false;
}

console.log(square(16));
