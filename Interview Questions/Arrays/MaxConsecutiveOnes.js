function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let count = 0;

  nums.forEach((e) => {
    if (e === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  });

  return Math.max(max, count);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
