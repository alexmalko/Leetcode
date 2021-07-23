function even(nums) {
  let counter = 0;
  nums.forEach((e) => {
    if (e.toString().length % 2 === 0) {
      counter++;
    }
  });
  return counter;
}

console.log(even([1, 22, 333, 22]));
