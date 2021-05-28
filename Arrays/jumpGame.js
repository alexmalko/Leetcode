let canJump = (num) => {
  let last = num.length - 1;
  for (let i = last; i >= 0; i--) {
    if (i + num[i] >= last) {
      last = i;
    }
  }
  return last == 0;
};

console.log(canJump([3, 2, 1, 0, 4]));
