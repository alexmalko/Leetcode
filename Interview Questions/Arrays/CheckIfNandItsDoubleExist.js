function checkIfExist(arr) {
  const record = new Set();
  for (const num of arr) {
    const half = num / 2;
    const double = num * 2;
    if (record.has(half) || record.has(double)) return true;
    record.add(num);
  }
  return false;
}

console.log(checkIfExist([10, 2, 5, 3]));
