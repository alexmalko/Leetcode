function partition(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }

  if (sum % 2 === 1) {
    return false;
  } else {
    sum = sum / 2;
  }

  let combos = new Array(sum + 1).fill(false);
  combos[0] = true;

  console.log(sum);

  for (let num of nums) {
    for (let i = sum; i >= num; i--) {
      combos[i] = combos[i] || combos[i - num];
    }
  }

  return combos[sum];
}

console.log(partition([1, 5, 11, 5]));
