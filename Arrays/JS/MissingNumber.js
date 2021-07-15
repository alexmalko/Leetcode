var missingNumber = function (nums) {
  let set = new Set();
  for (const num of nums) {
    set.add(num);
  }
  console.log(set);
  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  console.log(set);
};

console.log(missingNumber([3, 0, 1]));
