function version(n) {
  let left = 0,
    right = n;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (!isBadVersion(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
